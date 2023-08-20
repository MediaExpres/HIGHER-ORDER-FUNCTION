// this keyword review

// new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xanax', 55)
person1 // Person {name: 'Xanax', age: 55}

// implicite binding

const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi ' + this.name)
    }
}

