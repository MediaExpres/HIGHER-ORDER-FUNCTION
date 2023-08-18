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
        return 'attack with ' + elf2.weapon
        }
    }

// elf.name
elf.attack()
elf2.attack()