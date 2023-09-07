// function letAdamLogin() {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i)
//     }
//     return 'Aces Granted to Adam'
// }

// // function letEvaLogin() {
// //     let array = [];
// //     for (let i = 0; i < 10000000; i++) {
// //         array.push(i)
// //     }
// //     return 'Aces Granted to Eva'
// // }


// letAdamLogin()
// letEvaLogin()

// ........................
// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i)
//     }
//     return 'Aces Granted to ' + user;
// }

// letUserLogin('Adam')

// .......... refactoring
// const giveAccessTo = (name) => { // wre now tell functioni what data to use
// 'Access Granted to ' + name;
// }
// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i)
//     }
//     return giveAccessTo(user);
// }

// letUserLogin('Adam')

// ....... authenticate function
const giveAccessTo = (name) =>  // wre now tell functioni what data to use
    'Access Granted to ' + name
    

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name)
}

function sing(person) {
    return 'la la la bla bla bla my name is ' + person.name; 
}

function letPerson(person, fn) {
    if(person.level === 'admin') {
        return fn(person)
    } else if (person.level === 'user') {
        return fn(person) // replacing 100000 with person broke the giveAccessTo because verify throws undefined
    }
    
}

letPerson({level: 'admin', name: 'Geta'}, sing);
