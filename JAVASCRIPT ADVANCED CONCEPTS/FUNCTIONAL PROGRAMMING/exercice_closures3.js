// the following throws 4 times 4VM75:4 I'm at the index 4. How to show each position?

// const array = [1, 2, 3, 4];
// for(var i=0; i<array.lenght; i++) {
//     setTimeout(function() {
//         console.log('I\'m at the index ' + i)
//     }, 3000)
// } 

// first solution is to change var to let to show the following: 
// I'm at the index 0
// I'm at the index 1
// I'm at the index 2
// I'm at the index 3
// because let allows to block scoping between curly brackets below create a scope for each i who then is scoped below

// const array = [1, 2, 3, 4];
// for(let i=0; i<array.lenght; i++) {
//     setTimeout(function() {
//         console.log('I\'m at the index ' + i) // to log the values write array[i] instead of i
//     }, 3000)
// } 

// second solution with var and closure

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(closureI) {
    setTimeout(function() {
        console.log('I\'m at the value ' + array[closureI]) 
    }, 3000)
})(i)
} 
