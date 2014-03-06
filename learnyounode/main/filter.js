module.exports = function(dir, filter, callback){
	var fs = require('fs'),
		reg = new RegExp('\\.' + filter + '$');
	fs.readdir(dir, function(err, list){
		if(err) {
			return callback(err);
		};
		var arr = [];
		for(var i = 0; i< list.length; i++){
			if(reg.test(list[i])){
				arr.push(list[i]);
			}
		}
		return callback(null, arr);
	});
}