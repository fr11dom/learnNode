//在指定的目录里按照一定的规则过滤出文件，必须用异步的I/O
function filterFilesWithAsynIo(dir, fileExtension){
	var fs = require('fs'),
		reg = new RegExp('\\.' + fileExtension + '$');
	fs.readdir(dir, function(err, list){
		if(err) {
			throw err;
		}
		for(var i = 1; i< list.length; i++){
			if(reg.test(list[i])){
				console.log(list[i]);
			}
		}
	});
}
filterFilesWithAsynIo(process.argv[2], process.argv[3]);