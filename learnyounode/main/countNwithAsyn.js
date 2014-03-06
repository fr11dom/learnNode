//从命令行传一个文件路径作为参数，用异步的方法去读，统计换行符的个数并打印
function countNwithAsyn(){
	var fs = require('fs');
	fs.readFile(process.argv[2], function (err, data) {
	  	if (err) {
	  		throw err;
	  	}
	 	console.log(data.toString().split('\n').length - 1);
	});
}
countNwithAsyn();
