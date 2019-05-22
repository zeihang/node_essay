// 遵循后进先出的原则
// 全局执行栈只在页面被关闭时销毁

function a() {
    b()
}

function b() {
    c()
}

function c() {
    console.log('123')
}

/**
ECS = [
    globalContext
]
ECS.push(fnAContext)
ECS.push(fnBContext)
ECS.push(fnCContext)
ECS.pop()
ECS.pop()
ECS.pop()
 */

// 函数在定义时会产生作用域，并会保留一个scope对象

function q() {
    function w() {
        function e() {

        }
    }
}
/**
q.[[scope]] = [
    globalContext.VO
]
w.[[scope]] = [
    qContext.AO
    globalContext.VO
]
e.[[scope]] = [
    wContext.AO
    qContext.AO
    globalContext.VO
] 
*/

var a = 1;
function sum() {
    var b = 2;
    return a + b
}
sum()
/**
sum.[[scope]] = {
    globalContext.VO
}
ECS = [
    globalContext,
    sumContext
]
sumContext = {
    AO: {

    },
    Scope: [AO,sum.[[scope]]]
}
 */
