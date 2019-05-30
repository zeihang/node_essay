// typeof 用来鉴别原始数据类型
// 但是在判断对象时，只要不是函数，它都认为时object
console.log(typeof [])
console.log(typeof new Date())
console.log(typeof new RegExp('/a/'))
console.log(typeof function(){})

// 也可以用Object.prototype.toString.call()来判断
// 缺点时不能判断它属于某个自定义的类型
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call(new Date()))
console.log(Object.prototype.toString.call(function() {}))

// 自己实现一个简单的instanceof
function instanceOf(a,b) {
    b = b.prototype;
    a = a.__proto__;
    while (true) {
        if (a === null) {
            return false
        }
        if (a === b) {
            return true
        }
    }
    a = a.__proto__;
}

// 但是instanceof不能鉴别基础数据类型 

// Symbol.hasInstance
console.log([] instanceof Array)
console.log(Array[Symbol.hasInstance]([]))

// 调用instanceof实际上就是调用每个类的Symbol.hasInstance方法
// Symbol.hasInstance可以重写
class V {
    static [Symbol.hasInstance](x) {
        return typeof x === 'string'
    }
}
console.log('ss' instanceof V)