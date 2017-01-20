# toPromise
convert callback function to promise



## Installation

    $ npm install toPromise


## API

```javascript
require('toPromise');


function test (arg, callback) {
    if (arg > 0) {
        cb (null, arg*2);
    }
    else {
        cb (new Error ('arg is less than 0'));
    }
};

toPromise(test,a)
    .then(function(result){
        //TODO:...
    })
    .catch(function(e){
        //TODO:...
    });

```

## License

  MIT
