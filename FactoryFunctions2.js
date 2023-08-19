const elf = {
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
    
    // factory functions
    const elfFunctions = {
        attack() {
            return 'attack with ' + this.weapon // this. added after error: weapon is not defined
        }
    }
    function createElf(name, weapon) {
        return {
            name, //: name, symplified with ES6
            weapon, //: weapon,
          // removed the function attack from there and created elfFunctions above
        }
    }
    
    // const Peter = createElf('Peter', 'stones');
    // Peter.attack()
    
    const Sam = createElf('Samuel', 'fire')
    Sam.attack = elfFunctions.attack // this one is added after introduction of elfFunctions
    Sam.attack()