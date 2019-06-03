// 被调用的对象（别的函数使用他们的方法）

exports.A = function(a){
	return function(){console.log('A: ' + a)};
}

exports.B = function(b){
	return function(){console.log('B: ' + b)};
}

exports.C = function(c){
	return function(){console.log('C: ' + c)};
}