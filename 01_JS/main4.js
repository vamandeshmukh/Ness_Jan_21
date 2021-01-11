//destrcturing - 

// let myArray = [10, 20, 30, 40, 50];

// let [n1, n2, n3, n4, n5] = myArray; // array destructuring 
// console.log(n3);

// function arrFun() {
//     return [11, 22, 33];
// }
// let [m1, m2, m3] = arrFun();
// console.log(m2);

let data = { a: 10, b: 20, c: 30 };
let { a, b, c } = data; // object destructuring 

console.log(data.a);
console.log(a);

console.log(b);
console.log(c);

// rest params == varargs in Java 

let sum = (...args) => {
    
    return args.reduce((a, b) => {
        return a + b;
    });
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40));
console.log(sum(10, 20, 30, 40, 50, 60));

// spread sytax 

const myNums = [11, 22, 33, 44, 55];
console.log(sum(...myNums));

