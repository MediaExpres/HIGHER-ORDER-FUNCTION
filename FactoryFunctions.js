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