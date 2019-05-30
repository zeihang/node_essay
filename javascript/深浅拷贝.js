// 深浅靠是否与原体是否有引用关系来判断
// 深拷贝与原体毫无联系，是两个独立个体
// 浅拷贝与原体有引用关系，修改一方可能会改变另一方

//浅拷贝
let oo = {a:1, b:2}
let oobj = {...oo}

//深拷贝
// json不支持函数和undefind
let o = {
    a: 1,
    b: {
        x: 1,
        y: 2
    },
    c: [1,2,{m:1,n:2}],
    d() {
        console.log("d")
    },
    e: undefined,
    f: null
}
let objOne = JSON.parse(JSON.stringify(o))

objOne.constructor

function deepClone(o, hash = new WeakMap()) {
    // null == undefined
    if (o == null) return o;
    if (typeof o !== 'object') return o;
    if (hash.get(o)) return hash.get(o);
    if (o instanceof Date) return new Date(o);
    if (o instanceof RegExp) return new RegExp(o); 
    let O = new o.constructor()
    hash.set(o, O)
    for (let key in o) {
        O[key] = deepClone(o[key], hash)
    }
    return O;
}

let objTwo = deepClone(o)

console.log(objOne, objTwo)
