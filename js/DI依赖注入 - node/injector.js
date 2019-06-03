// 注射器

let injector = function(){
	this.dependences = {};
}

// 注册函数
injector.prototype.register = function(str, obj){
	this.dependences[str] = obj;
}

// 注入依赖
injector.prototype.resolve = function(deps, func, scope){
	var funcParams = this.getParamNames(func);
	var params = [];
	for(var i = 0; i < funcParams.length ; i++){
		var temp = this.dependences[funcParams[i]] || deps[i]
		if(temp){
			params.push(temp);
		} else{
			throw new Error('缺失的依赖：' + funcParams[i]);
		}
	}
	func.apply(scope || {}, params);
}

// 获取依赖项
injector.prototype.getParamNames = function (func) { // 获取方法的参数名字
    var paramNames = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
    paramNames = paramNames.replace(/ /g, '')
    paramNames = paramNames.split(',')
    return paramNames // Array
}

module.exports = injector;

