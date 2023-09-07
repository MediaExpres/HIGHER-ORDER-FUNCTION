var harry = 'potter'
var valdemort = 'he who has not to be named'

function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.lenght);
    var attack2 = Math.floor(Math.random() * char2.lenght);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

fight(harry, voldemort)