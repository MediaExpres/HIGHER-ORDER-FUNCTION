let dragon = {
    name: 'Tatiana',
    fire: true,
    fight() {
        return 5 // damage
    },
    sing() {
        return `I am ${this.name}, the breather of flames not quite environmental friendly`
    }
}
dragon.sing()