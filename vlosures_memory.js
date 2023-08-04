// closures are memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)')
    console.log('created')
    return bigArray[index]
} 

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)


// allows ENCAPSULATION