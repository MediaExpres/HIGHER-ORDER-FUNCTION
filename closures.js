function a() {
    let grandpa = 'grandpa'
    return function b() {
let father = 'father'
let random = 3212315 // will be garbaged because nothing is referencing it in the child below. grandpa and father not because they are referenced below
return function c() {
    let son = 'son'
    return `${grandpa} > ${father} > ${son}`
}
    }
}

a() // returns function: b
a()() // returns function: c
a()()() // returns `grandpa > father > son`