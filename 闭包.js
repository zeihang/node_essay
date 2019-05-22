/**
 * 广义上
 * 闭包是指那些能够访问自由变量的函数
 * 自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量
 * 闭包 = 函数 + 函数能够访问的自由变量
 */
var a = 1;
function foo() {
    console.log(a);
}
foo()

/**
 * 实践中
 * 即使创建它的上下文已经销毁，它任然存在在代码中引用了自由变量
 */

 // f在执行上下文时，fn的上下文已经被销毁了，但f维护了一个作用域链，保存了fnContext.AO。
 // 正因为JavaScript有这个机制才实现了闭包这个概念
 // 这段代码在PHP中会报错，f只能读出自身作用域和全局作用域里的值
 var scope = 'global';
 function fn() {
     var scope = 'local';
     function f() {
         return scope
     }
     return f
 }
 var foo = fn()
 console.log(foo())