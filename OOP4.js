// with ES6 js got classes

class Elfa {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;  
    }
}

Elf.prototype.attack = function() { 
    return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones') 
  console.log(peter.attack())
const sam = new Elf('Samuel', 'fire')
  console.log(sam.attack())