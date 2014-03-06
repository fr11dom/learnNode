//写一个http get请求，参数从命令行给，打印两行信息，第一行是一个整数，第二行是一个请求返回的内容
var http = require('http');
http.get(process.argv[2], function (res) {
	var str = '';
  res.on('data', function(d){
  	str += d.toString();
  });
 res.on('end', function(){
  	console.log(str.length);
  	console.log(str);
  });
});