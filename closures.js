function a() {
    let grandpa = 'grandpa'
    return function b() {
let father = 'father'
return function c() {
    let son = 'son'
    return `${grandpa} > ${father} > ${son}`
}
    }
}

a() // returns function: b
a()() // returns function: c
a()()() // returns `grandpa > father > son`