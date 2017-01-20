toPromise
=============
convert callback function to promise.

#useage
-----
require('./index');
function test(a,callback){
  if(a>0){
    callback(null,a*2);
  }else{
    callback(new Error('arg less than zero.'));
  }
}
toPromise(test,1).then(function(r,e){if(e){console.error(e);}else{console.log(r);}).catch(function(e){console.error(e);});
