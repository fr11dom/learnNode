//从命令行传一个文件路径作为参数，用同步的文件系统去读，统计换行符的个数并输出
function countNwithSyn(filePath){
	var fs = require('fs');
	var str = fs.readFileSync(filePath.toString();
	console.log(str.split('\n').length - 1)
}
countNwithSyn(process.argv[2]));