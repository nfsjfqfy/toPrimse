'use strict';

const should = require ('should');
const cbtp = require ('./');


function test1(a, b, cb) {
    cb (null, a===b);
}

function test2(a, cb) {
    if (a >= 0) {
        cb (null, a*2);
    }
    else {
        cb ( new Error ('a is less than 0'));
    }
}

describe ('convert fuc to promise', function () {
    describe ('1 should not equal to 2', function () {
        it ('return false', function () {
            cbtp.toPromise (test1,1, 2)
                .then (function (result) {
                    result.should.be.false ();
                })
                .catch (function (e) {
                    console.error (e);
                });
        });
    });
    describe ('1 should equal to 1', function () {
        it ('return true', function () {
            cbtp.toPromise (test1,1, 1)
                .then (function (result) {
                    result.should.be.true ();
                })
                .catch (function (e) {
                    console.error (e);
                });
        });
    });
    describe ('3*2=6', function () {
        it ('return 6', function () {
            cbtp.toPromise (test2,3)
                .then (function (result) {
                    result.should.be.equal (6);
                })
                .catch (function (e) {
                    console.error (e);
                });
        });
    });
    describe ('-1 should be throw error', function () {
        it ('shoud not be exec', function () {
            cbtp.toPromise (test2,-1)
                .then (function () {
                    should.fail ();
                })
                .catch (function (e) {
                    console.error (e);
                    (e != null).should.be.true ();
                });
        });
    });
});
