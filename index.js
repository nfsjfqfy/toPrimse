"use strict";
function toPromise() {
    let a = Array.prototype.slice.call(arguments, 1);
    let f = arguments[0];
    return new Promise(function (resolve, reject) {
        a.push(function (err, r) {
            if (err) {
                reject(err);
            } else {
                resolve(r);
            }
        });
        f.apply(null, a);
    });
}
module.exports.toPromise = toPromise;
