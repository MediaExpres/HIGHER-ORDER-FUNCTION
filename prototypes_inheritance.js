// write this in console chrome:

const array = []
array.__proto__

// gives: 
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries:ƒ entries()
every:ƒ every()
fill:ƒ fill()
filter:ƒ filter()
find:ƒ find()
findIndex:ƒ findIndex()
findLast:ƒ findLast()
findLastIndex:ƒ findLastIndex()
flat:ƒ flat()
flatMap:ƒ flatMap()
forEach:ƒ forEach()
includes:ƒ includes()
indexOf:ƒ indexOf()
join:ƒ join()
keys:ƒ keys()
lastIndexOf:ƒ lastIndexOf()
length:0
map:ƒ map()
pop:ƒ pop()
push:ƒ push()
reduce:ƒ reduce()
reduceRight:ƒ reduceRight()
reverse:ƒ reverse()
shift:ƒ shift()
slice:ƒ slice()
some:ƒ some()
sort:ƒ sort()
splice:ƒ splice()
toLocaleString:ƒ toLocaleString()
toReversed:ƒ toReversed()
toSorted:ƒ toSorted()
toSpliced:ƒ toSpliced()
toString:ƒ toString()
unshift:ƒ unshift()
values:ƒ values()
with:ƒ with()
Symbol(Symbol.iterator):ƒ values()
Symbol(Symbol.unscopables):{at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]:Object

// if u go back from the array to the object:
const array = []
array.__proto__.__proto__

// you get:
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()