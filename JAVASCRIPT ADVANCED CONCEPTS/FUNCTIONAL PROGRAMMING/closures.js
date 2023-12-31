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

// closures are also called lexical scoping = where is written, scoping = what variables we have access to  

// SECOND EXAMPLE

// function boo(string) {
//     return function(name) {
//         return function(name2) {
//             console.log(`${string} ${name} ${name2}`)
//         }
//     }
// }

// simple written

const boo = (string) => (name) => (name2) => 
    console.log(`${string} ${name} ${name2}`)

    // boo('HI')('Tim')('Becks')  // returns HI Tim Becks

        const booString = boo('hi')
        // wait 5 years
        const booStringName = booString() // will wait 5 years to do it