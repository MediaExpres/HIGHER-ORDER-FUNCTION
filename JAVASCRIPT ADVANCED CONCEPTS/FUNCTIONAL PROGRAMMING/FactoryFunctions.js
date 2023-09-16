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

function createElf(name, weapon) {
    return {
        name, //: name, symplified with ES6
        weapon, //: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

// const Peter = createElf('Peter', 'stones');
// Peter.attack()

const Sam = createElf('Samuel', 'fire')
Sam.attack()