// multiplyBy function in the higher order function lesson

const multiplyBy = function(num1) {
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2);
