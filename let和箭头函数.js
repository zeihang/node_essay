// 不能重复定义
// 不能预解释
// 不会挂在windows下
// 暂时性死区
let a = 1;
// 正常变量会延作用域链向上查找
// 但是let会把这个作用域绑死
{
    console.log(a) // 报错
    let a = 2
}

console.log(b); // undefind
{
    // 相当与 var b = function() {}
    function b(params) {
        
    }
}

// 箭头函数没有自己的this，也没有arguments
// 对象不是作用域，this会继续向上寻找
let c = 1
let obj = {
    c: 1,
    fn: () => {
        setTimeout(() => {
            // 实际找的是window.c，但let声明的变量不会挂在windos下
            console.log(c) // undefind
        })
    }
}