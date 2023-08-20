// with ES6 js got classes

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;  
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

// this is syntactc sugar as they say

const peter = new Elf('Peter', 'stones') 
  console.log(peter.attack())
const sam = new Elf('Samuel', 'fire')
  console.log(sam.attack())