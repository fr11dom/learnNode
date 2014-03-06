//将上一个功能用module的方式写
var myModule = require('./filter.js');
myModule(process.argv[2], process.argv[3], function(error, data) {
    if (error) {
        throw error;
    }
    for(var i=0; i<data.length; i++){
    	console.log(data[i])
    }
   // console.log(data);
});
