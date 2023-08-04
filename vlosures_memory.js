// closures are memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)')
    console.log('created')
    return bigArray[index]
} 

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
const getHeavyDuty = heavyDuty2() // create a variable that gets heavyDuty2 and () call this
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2() {
    const bigArray = new Array(7000).fill(':)')
    console.log('created Again')
    return function(index) {
        return bigArray[index]
    }
} 

// allows ENCAPSULATION