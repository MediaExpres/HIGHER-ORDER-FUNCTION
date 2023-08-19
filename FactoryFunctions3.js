// const elf = {
    name: 'Orwell',
    weapon: 'Bow',
    attack() {
        return 'attack with ' + elf.weapon
        }
    }
    
    const elf2 = {
        name: 'Sally',
        weapon: 'Bow',
        attack() {
            return 'attack with ' + elf2.weapon //error: here Andrei kept elf.weapon which points to the first elf not elf2
            }
        }
    
    // elf.name
    // elf.attack()
    elf2.attack()
    
    // Constructor Funcrtions
   
    function elf(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    
    const Peter = elf('Peter', 'stones');
    // Peter.attack = elfFunctions.attack
    // console.log(Peter.attack())
    
    const Sam = elf('Samuel', 'fire')
    // Sam.attack = elfFunctions.attack // this one is added after introduction of elfFunctions
    // console.log(Sam.attack())
    Sam.name // if run this error cannot read property name so you need to add new above to the elfes