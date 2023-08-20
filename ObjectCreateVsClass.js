// debate to use or not to use classes, this. and new Elf like coding
// because to much confusion
// everything below could be done with Object.create()
// which is pureprototypal inheritance 
// Andrei says classes is more often used

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;  
    }
    attack() { 
        return 'attack with ' + this.weapon
    }
}

const peter = new Elf('Peter', 'stones') 
console.log(peter instanceof Elf) 
  console.log(peter.attack())
const sam = new Elf('Samuel', 'fire')
  console.log(sam.attack())