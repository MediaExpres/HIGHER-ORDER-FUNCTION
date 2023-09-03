// Compose - the most important feature of Javascript as per A. Neagoie

// data --> fn --> data --> fn and so on
// Request: have a number, multyply by 3, absolute which is the same to positive

const compose = (f, g) => (Data) => f(g(Data))
const multiplyBy3 = (num) = num*3;
const makePositive = (num) = Math.abs;
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive) // this is what we want 

multiplyBy3AndAbsolute(-50)