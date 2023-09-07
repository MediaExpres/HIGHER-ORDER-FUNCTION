// Compose - the most important feature of Javascript as per A. Neagoie

// data --> fn --> data --> fn and so on
// Request: have a number, multyply by 3, absolute which is the same to positive

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) = num*3;
const makePositive = (num) = Math.abs;
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive) // this is what we want 

multiplyBy3AndAbsolute(-50) // why???? Uncaught ReferenceError: num is not defined at <anonymous>:2:21

// // pipe = the same as compose but goes from left to right
// const pipe = (f, g) => (data) => g(f(data))
// const multiplyBy3 = (num) = num*3;
// const makePositive = (num) = Math.abs;
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive) // this is what we want 

// multiplyBy3AndAbsolute(-50) // why???? Uncaught ReferenceError: num is not defined at <anonymous>:2:21

fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)
// all the 2 will have the exact same result 