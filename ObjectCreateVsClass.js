// debate to use or not to use classes, this. and new Elf like coding

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