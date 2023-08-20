var a = new Number(5)
typeof a // 'object' because we use a constructor function

var b = 5
typeof b // 'number'

a === b // false

a == b // true becose these types get coerced

b.toString // b gets methods as well

new Date().getDate // we get methods available because techncally everything in js is an object and uses a constructor
// with the exception of null and undefined