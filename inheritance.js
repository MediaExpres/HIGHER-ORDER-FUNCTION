class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja stars');
const ogre ={...fiona}
ogre // now I copied fiona into ogre. Cloned object but no longer has Elf class, it's an empty object.