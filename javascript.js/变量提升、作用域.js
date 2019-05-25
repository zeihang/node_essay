// let还没出来之前一个有3种作用域
// 全局 函数 eval
// js的作用域是静态的 
// 函数作用域是在函数定义时产生的
// 执行函数时 会产生执行上下文 EC

// 全局上下文 函数上下文

// 全局上下文实际上产生了个 vo  但是我们看不见
var a = 100
function sumOne () {}
// vo(globalContext){
//     a: 100,
//     sum: ref to function sumOne
// }

// 函数上下文
function sum(a, b) {
    var c = 10;
    // 函数表达式
    var d = function() {}
    function total() {}
    // 会用后面的覆盖前面的
    function total() {}
    // 用var时 js会认为total已经存在，不做操作
    var total
}
sum(10)
// 找形参，没有实参 那就用underfined代替
// 找函数声明
// 变量声明
// vo(sum){
//     a: 10,
//     b: undefined,
//     total： ref to function total,
//     c: 10,
//     d: undefined 具体函数之后才会赋予
// }

//这就是js与解析，也是为什么函数声明在变量声明之前的原因