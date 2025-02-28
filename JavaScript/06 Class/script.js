// ============== Function ==============
// function getFun() {
//     console.log('Hello');
// }

// getFun();
// getFun();
// getFun();

// const Hello = function () {
//     console.log('Hello');
// }

// Hello();

// function print() {
//     let b = 'hello'
//     console.log(b);
//     return 100;
// }

// let a = print();
// console.log(a);

// parameters and arguments
// function getFun(a) {
//     console.log(a);
// }

// getFun(100);

// function add(a, b) {
//     return a * b;
// }

// let print = add(10, 40);
// console.log(print);

// function three(a, b = 'World') {
//     return a + b
// }

// let a = three('Hello ');
// console.log(a);

// rest parameters => array []
// function getHello(...a) {
//     return a;
// }

// const print = getHello('Hello', 'World', 'HTML');
// console.log(print);

// Nested Function
// function one() {
//     let a = 'One';
//     console.log(a);
//     function tow() {
//         let b = 'two';
//         console.log(b);
//     }
//     tow();
// }

// one();

// arrow function
// const arrow = (a, b) => {
//     return a + b;
// }

// let print = arrow(10, 20);
// console.log(print);

// const one = () => console.log('One');
// one();

// const two = (a, b) => a + b;
// console.log(two(10, 40));

// Immediately Invoked Function Expression(IIFE)
// (function () {
//     console.log('JavaScript')
// })();

// (
//     function () {
//         console.log('Web Tech');
//     }
// )();