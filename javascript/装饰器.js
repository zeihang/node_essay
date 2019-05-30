// 装饰器可以装饰类的属性、方法、和类
@flag
class Servant {
    constructor(name) {
        this.name = name
    }
    @readOnly PI = 3.14
    @log 
    call() {
        console.log('~~')
    }
}

function readOnly(prot, key, descriptor) {
    descriptor.writable = false;
}

function log(prot, key, descriptor) {
    let old = descriptor.value
    descriptor.value = function () {
        console.log('~~~')
        old()
    }
}

function flag(target) {
    console.log(target)
    target.saber = 'saber'
}