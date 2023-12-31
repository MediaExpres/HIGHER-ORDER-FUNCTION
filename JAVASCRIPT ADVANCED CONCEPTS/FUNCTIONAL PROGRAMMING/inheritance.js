// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// }

// const fiona = new Elf('Fiona', 'ninja stars');
// const ogre ={...fiona}
// // ogre // now I copied fiona into ogre. Cloned object but no longer has Elf class, it's an empty object.
// console.log(fiona === ogre); // throw false because the objects does not refferencing the same place in memory

// below is the actual inheritance how you do it

// class Character { // all the characters will have name, weapon and can attack
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// }

// class Elf extends Character { // subclassing in OOP
    
// }

// const fiona = new Elf('Fiona', 'ninja stars');
// fiona // throws Object { name: "Fiona", weapon: "ninja stars" }

// add type as super class
class Character { // all the characters will have name, weapon and can attack
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character { // subclassing in OOP
    constructor(name, weapon, type) {
        super(name, weapon);
        console.log(this) // proves super must be used to allow this. (if console log above super throws an error)
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color
    }
    makeFort() {
        return 'strongest fort in the world was build by ' + this.name;
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
// dolby // throws: Object { name: "Dolby", weapon: "cloth", type: "house" }
dolby.attack(); // throws: "attack with cloth" 
const sherk = new Ogre('Shrek', 'club', 'green')
sherk.makeFort();