   // Constructor Funcrtions
   
    function elf(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    
    const Peter = new elf('Peter', 'stones');
    // Peter.attack = elfFunctions.attack
    // console.log(Peter.attack())
    
    const Sam = new elf('Samuel', 'fire')
    // Sam.attack = elfFunctions.attack // this one is added after introduction of elfFunctions
    // console.log(Sam.attack())
    Sam.name // if run this error cannot read property name so you need to add new above to the elfes