# toPromise
convert callback function to promise



## Installation

    $ npm install cbtp


## API

```javascript
const cbtp = require('cbtp');


function test (arg, callback) {
    if (arg > 0) {
        cb (null, arg*2);
    }
    else {
        cb (new Error ('arg is less than 0'));
    }
};

cbtp.toPromise(test,a)
    .then(function(result){
        //TODO:...
    })
    .catch(function(e){
        //TODO:...
    });

```

## License

  MIT
