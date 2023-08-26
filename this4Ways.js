// this keyword review

// 1 new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xanax', 55)
person1 // Person {name: 'Xanax', age: 55}

// 2 implicite binding

const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi ' + this.name)
    }
}

// 3 explicite binding

const person3 = {
    name: 'Karen',
    age: 44,
    hi: function() {
        console.log('hi ' + this.setTimeout) 
        // this explicitly reffers to window
        // explicit use bind, call or apply
    }.bind(window)
}
person3.hi() // hi function setTimeout() { [native code] }

// 4. this, with arrow functions

const person4 = {
    name: 'Kiki',
    age: 30,
    hi: function() {
        var inner = () => { // this. works only with arrow functions
            console.log('hi ' +this.name)
        }
        return inner()
    }
}

person4.hi() // hi Kiki
