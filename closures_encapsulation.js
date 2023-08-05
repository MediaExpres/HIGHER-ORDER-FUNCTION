// Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Booom';
     }
    setInterval(passTime, 1000) // every one second
    return {
launch: launch,
totalPeaceTime: totalPeaceTime
    }

}

const ohno = makeNuclearButton();
ohno.totalPeaceTime(); // returns 0 (zero)