//

const array = [1, 2, 3, 4];
for(var i=0; i<array.lenght; i++) {
    setTimeout(function() {
        console.log('I\'m at the index ' + i)
    }, 3000)
} 