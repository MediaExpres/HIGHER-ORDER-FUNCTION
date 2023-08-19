   // Constructor Funcrtions
   
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;  
}

Elf.prototype.attack = function() { // don't want to use arrow function because throws undefined because it is lexically scoped, while now it is dinamically scoped
    return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones') //SyntaxError: Identifier 'elf' has already been declared
  console.log(peter.attack())
const sam = new Elf('Samuel', 'fire')
//sam.name
  console.log(sam.attack())
    // WHY? SyntaxError: Identifier 'elf' has already been declared at <anonymous>:1:1
    // BUT IN FIREFOX WORKS, now Chrome is more strict with old methods?
    // BUT then in Firefox throws SyntaxError: redeclaration of const peter ?!? why?
    // ANSWER: forgot to reload the browser :D 


// Example natively construction in javascript is Function()

// const Elf1 = new Function('name', 'weapon', 
// `this.name = name;
// this.weapon = weapon;`)

// const sara = new Elf1('Sarach', 'fireworks')
// sara

// throws {name: 'Sarach', weapon: 'fireworks'}
// name : "Sarach"
// weapon : "fireworks"
// [[Prototype]] : Object