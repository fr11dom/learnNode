//写一个http get 请求，url再命令行提供
function requestGet(url){
  var http = require('http');
  http.get(url, function (res) {
    res.on('data', function(d){
    	console.log(d);
    });
  });
}
requestGet(process.argv[2]);