// multiplyBy function in the higher order function lesson

// const multiplyBy = function(num1) {
//     return function(num2) {
//         return num1*num2
//     }
// }

// const multiplyByTwo = multiplyBy(2);

// multiplyByTwo(2);
// multiplyByTwo(4);
// multiplyByTwo(10);

// the same with arrow functions

const multiplyBy = (num1) => (num2) => num1*num2

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(6);