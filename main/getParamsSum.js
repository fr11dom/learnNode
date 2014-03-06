//写一个程序可以在命令行输入一或多个参数然后打印出这些参数的和
function getParamsSum(){
	var params = process.argv,
	len = params.length,
	i = 2,sum = 0;
	for(; i<len; i++){
		sum += Number(params[i]);
	}
	console.log(sum);
}
getParamsSum();