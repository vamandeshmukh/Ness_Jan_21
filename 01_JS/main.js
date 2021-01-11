// 'use strict';

// console.log("Hello world!"); 

// int num = 10; // Java 
// num = "Vaman"; // X

// var let const 

// let num = 10.5;
// console.log(num);
// console.log(typeof(num));
// num = 'Vaman "Vaman" Vaman "Vaman" Vaman';
// console.log(num);
// num = "Vaman 'Vaman' Vaman";
// console.log(num);
// console.log(typeof(num));
// num = true;
// console.log(num);
// console.log(typeof(num));

// let firstName = 'Vaman';
// // let fullName = firstName + ' Deshmukh';
// let fullName = `${firstName} Deshmukh 
// Hyderabad`;
// console.log(fullName);


// num = 12;
// console.log(num);
// const num2 = 20;
// // num2 = 22;
// console.log(num2);





// alert("Hi!");

// JavaScript TypeScript EcmaScript CoffeeScript 

// V8       engine to run JS 
// Chakra   engine to run JS 

// falsy => false, 0, null, '', undefiled
// truthy 

// let candidateName = "Sudesh";
// if (candidateName) { 
//     //
// }
// else {
// }

// scope 

// let a = 1;
// console.log(a);

// function fun() {
//     let a = 11;
//     let c = 3; // global without var let const 
//     console.log(a);
//     console.log(c);
// }
// fun();
// console.log(a);
// console.log(c);

// hoisting - variable hoisting , function hoisting 

// console.log('hoist');

// console.log(num);
// var num = 10;

// console.log(fun());

// function fun() {
//     console.log('fun');
//     return 10;
// }


// let num1 = 10;
// let num2 = "10";
// console.log(num1 === num2); // use === instead of ==    !== vs !=

// Infinity NaN = numeric values 
// console.log(10 / 0);
// console.log('abc' / 0);

// branching and looping is same additionally for of and for in 

// function declarations - 

// 1. with funciton keyword 

// function fun1() {
//     console.log('fun1');
//     // return 10; // remove 
// }
// let num = fun1();
// console.log(num);

// function fun2(a, b) {
//     return a + b;  
// }
// console.log(fun2());
// console.log(fun2(1));
// console.log(fun2(1, 2));
// console.log(fun2(1, 2, 3));

// 2. anonymous function  

// let fun3 =  function(a, b) {
//     return a + b;
// }

// console.log(fun3(1, 2));

// 3. IIFE  
// (function(a, b) {
//     console.log(a + b);
//     return a + b;
// })(1, 2);

// 4. arrow function 

// let variableName = () => {};

// let fun4 = (a, b) => {
//     return a + b;
// };
// console.log(fun4(10, 20));

// arguments to function calls 

// let fun5 = (a, b) => {
//     return a + b; // 
// } 

// console.log(fun5()); // u + u 
// console.log(fun5(10)); // 10 + u NaN
// console.log(fun5(10, 20));
// console.log(fun5(10, 20, 30));
// console.log(fun5(10, 20, 30, 40));

// console.log(fun5('aaa', 111));
// console.log(fun5(111, 'aaa'));


// this keyword 

// function fun6() {
//     console.log('fun6');
//     console.log(this);
// }
// fun6();

// let fun7 = () => {
//     console.log('fun7');
//     console.log(this);
// }
// fun7();

// default values to arguments 

// let fun8 = (a = 4, b = 5) => {
//     return a + b;
// }
// console.log(fun8());
// console.log(fun8(10));
// console.log(fun8(10, 20));

// let fun = (arg
//     ) => {
// };

// in JS function is an object 

// function as argument 



// function cube(n) {
//     return n * n * n;
// }

// function sumSquare(a, b) {
//     // return a + b;
//     return square(a) + square(b);
// }

// console.log(sumSquare(1, 2));

// function square(n) {
//     return n * n;
// }

// function sum(a, b, fn) {
//     // here 
//     return fn(a) + fn(b);
// }

// let num = sum(1, 2, square);
// console.log(num);

// console.log(sum(1, 2, 3));

// callback functions 

// const doFun = () => {
//     setTimeout( () => {
//         return { val: 'Hello!' };
//     } , 2000);
// } 
// const fun = doFun();
// console.log(fun); // undefined 
// console.log(fun.val);

// const doFun = (abc) => {
//     setTimeout(() => {
//         abc({ val: 'Hello!' });
//     }, 2000);
// }

// doFun((fun) => {
//     console.log(fun.val);
// });
// console.log('line 2');

// syntax for arrow funciton let variableName = (a) => {return a}; 


// closure - set of all vars in a perticular scope  

// function powerFactory(power) {
//     return function (number) {
//         return Math.pow(number, power);
//     }
// }

// let num = powerFactory(4);
// console.log(num(3));


// object 

let info = {
    id: 101,
    fullName: 'Vaman',
    salary: 10.5,
    phones: {
        home: 1010,
        office: 2020
    }
};

console.log(info.fullName);
console.log(info.phones.office);

// constructor function 
function someFun(a, b) {
    this.a = a;
    this.b = b;
}

let obj = new someFun('Vaman', 'Deshmukh');
console.log(obj.a);

// array 

let myArray = [10, 20, 30, 40, 50];

console.log(myArray[3]);
 // assignment - methods in array 

// let myDate = new Date();
// console.log(myDate); 


// parse Json

// JSON.parse 




