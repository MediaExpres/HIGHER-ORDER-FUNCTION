// with ES6 js got classes

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;  
    }
    attack() { // attack is not inside constructor because will take space in memory at every instantiation of an object, now is just in one place
        return 'attack with ' + this.weapon
    }
}

// this is syntactic sugar as they say because we still use prototypal inheritance
// everything in javascript is an object, class keyword is prototypal inheritance
// = pseudoclass inheritance

const peter = new Elf('Peter', 'stones') 
console.log(peter instanceof Elf) // = true
  console.log(peter.attack())
const sam = new Elf('Samuel', 'fire')
  console.log(sam.attack())