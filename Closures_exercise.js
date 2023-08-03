function callMeMaybe() {
    const callMe = 'Hi, I am now, here!';
    setTimeout(function() {
        console.log(callMe);
        }, 4000); // 4000 stands for 4 seconds
}

callMeMaybe(); //wait 4 seconds and then print Hi, I am now, here!