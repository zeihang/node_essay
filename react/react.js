function createElement(type, config = {}, children) {
    let propName;
    const props = {};
    for (let key in config) {
        props[key] = config[key]
    }
    let childrenLength = arguments.length - 2
    if (childrenLength === 1) {
        props.children = children
    } else {
        props.children = Array.from(arguments).slice(2)
    }
    return ReactElement(type, props)
}
function ReactElement() {
    
}