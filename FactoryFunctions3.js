   // Constructor Funcrtions
   
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;  
}
    
const peter = new Elf('Peter', 'stones') //SyntaxError: Identifier 'elf' has already been declared
  
const sam = new Elf('Samuel', 'fire')
sam.name
    // WHY? SyntaxError: Identifier 'elf' has already been declared at <anonymous>:1:1
    // BUT IN FIREFOX WORKS, now Chrome is more strict with old methods?
    // BUT then in Firefox throws SyntaxError: redeclaration of const peter ?!? why?
    // ANSWER: forgot to reload the browser :D 