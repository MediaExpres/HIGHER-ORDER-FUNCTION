let dragon = {
    name: 'Tatiana',
    fire: true,
    fight() {
        return 5 // damage
    },
    sing() {
        if (this.fire) { // noe chichi doesn't work anymore
        return `I am ${this.name}, the breather of flames not quite environmental friendly`
        }
    }
}
// dragon.sing()
// dragon.fight()

let lizard = {
    name: 'Chichi',
    fight() {
        return 1
    }
}

const singLizard = dragon.sing.bind(lizard)
console.log(singLizard())