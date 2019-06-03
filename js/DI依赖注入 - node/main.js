let injector = require('./injector.js');
let objs = require('./DIs.js');

// 声明被依赖项
let A = objs.A('aa');
let B = objs.B('ab');
let C = objs.C('ac');

injector = new injector();

// 注册被依赖项
injector.register('A', A);
injector.register('B', B);
injector.register('C', C);

let fun = function(A,B,C){
	A();
	B();
	C();
}

// 为fun注入依赖，并调用fun
injector.resolve([],fun);