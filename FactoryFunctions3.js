   // Constructor Funcrtions
   
    function elf(name, weapon) {
        this.name = name;
        this.weapon = weapon;  
}
    
    const Peter = new elf('Peter', 'stones'); //SyntaxError: Identifier 'elf' has already been declared
  
    const Sam = new elf('Samuel', 'fire');
 
    