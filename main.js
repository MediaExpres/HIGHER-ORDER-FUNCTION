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
const giveAccessTo = (name) => { // wre now tell functioni what data to use
'Access Granted to ' + name;
}
function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user);
}

letUserLogin('Adam')