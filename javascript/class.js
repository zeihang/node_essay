class Servant {
    constructor(name) {
        this.name = name
        this.age = 9
    }
    // 静态属性 es7才有
    // static cry = '呜呜呜'
    // 静态方法
    static die() {
        console.log('game over')
    }
    // 原型上的 就是公用的
    skill = 'cry' //es7才有
    call() {
        console.log('all hail saber')
    }
}
Servant.die();

// es6继承 会继承实例、原型、静态上的方法和属性
class Saber extends Servant {
    constructor(name) {
        super(name) // 相当于Servant.call(this, name)
    }
}