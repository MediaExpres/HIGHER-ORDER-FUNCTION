// the following throws 4 times 4VM75:4 I'm at the index 4. How to show each number?

const array = [1, 2, 3, 4];
for(var i=0; i<array.lenght; i++) {
    setTimeout(function() {
        console.log('I\'m at the index ' + i)
    }, 3000)
} 

