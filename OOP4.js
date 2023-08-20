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

// Elf.prototype.attack = function() { 
    
// }

const peter = new Elf('Peter', 'stones') 
  console.log(peter.attack())
const sam = new Elf('Samuel', 'fire')
  console.log(sam.attack())