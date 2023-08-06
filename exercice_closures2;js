// let view;
// function initialize() {
//     view = 'U+26F0';
//     console.log('view have been set!');
// }

// initialize();
// initialize();
// initialize();
// console.log(view)

// use closures to run only once - solution provided by Aria within Opera browser:


// let view;

// const initialize = (function() {
//     let hasInitialized = false;

//     return function() {
//         if (!hasInitialized) {
//             view = '⛰';
//             console.log('view has been set!');
//             hasInitialized = true;
//         }
//     };
// })();

// initialize();
// initialize();
// initialize();
// console.log(view);

// the code above throw the following error: SyntaxError: Identifier 'initialize' has already been declared

// solution 1 by Andrei

let view;
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
          return;
        } else {
        view = '🚵‍♀️';
        called++;
        console.log('view have been set!');       
        }
    }
}
const startOnce = initialize();
startOnce()
console.log(view)

// second solution inspired by Aria but wrong then corrected by me

// let view;

// const initialize = (function() {
//     let hasInitialized = false;

//     function initialize() {
//         if (!hasInitialized) {
//             view = '⛰';
//             console.log('view has been set!');
//             hasInitialized = true;
//         }
//     }

//     return initialize;
// })();

// initialize();
// console.log(view);