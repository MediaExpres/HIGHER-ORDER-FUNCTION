   // Constructor Funcrtions
   
    function elf(name, weapon) {
        this.name = name;
        this.weapon = weapon;  
}
    
    const peter = new elf('Peter', 'stones') //SyntaxError: Identifier 'elf' has already been declared
  
    const sam = new elf('Samuel', 'fire')
 sam.name
    // WHY? SyntaxError: Identifier 'elf' has already been declared at <anonymous>:1:1