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
    return true;
}

function letPerson(person, fn) {
    if(person.level === 'admin') {
        fn(500000)
    } else if (person.level === 'user') {
        fn(100000)
    }
    return giveAccessTo(user)
}

letPerson({level: 'user', name: 'Tim'}, authenticate);