function Servant(name) {
    this.name = name
}

Servant.prototype.say = function () {
    console.log(`all hail ${this.name}`)
}

let saber = new Servant('saber')

saber.say()

function mockNew() {
    let arg = [...arguments]
    let Constructor = arg.shift();
    let obj = {}
    obj.__proto__ = Constructor.prototype
    let r = Constructor.apply(obj, arg)
    return r instanceof Object ? r : obj;
}

let lancer = mockNew(Servant, 'lancer');

lancer.say()