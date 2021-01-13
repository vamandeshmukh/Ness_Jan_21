// class and interface in TS 
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.display = function () {
        console.log(this.firstName);
    };
    Customer.prototype.toString = function () {
        return this.firstName + " " + this.lastName + " " + this.age;
    };
    return Customer;
}());
var cust = new Customer('aa', 'bb', 10);
cust.display();
console.log(cust.toString());
// interface for an object 
// interface User {
//     name: string;
//     userInfo(): void;
// }
// function greet(user: User) {
//     console.log(user.name);
// }
// const obj: User = {
//     name: 'Hari', 
//     userInfo(): void {
//         console.log('My info');
//     }
// };
// greet(obj);
// obj.userInfo();
// class and object in TS 
// class PrintedStuff {
//     constructor() {
//     }
//     // methods 
// }
// class Book /* extends PrintedStuff */ {
//     name: string;
//     readonly author: string;
//     static publisher: string;
//     constructor(name: string, author: string) {
//         // super();
//         this.name = name;
//         this.author = author;
//     }
//     show() {
//         console.log(`${this.name} ${this.author}`);
//     }
//     static print() {
//         console.log('book published.');
//     }
// }
// const obj: Book = new Book('My Book', 'me');
// // obj.author = 'Not me';
// obj.show();
// Book.print();
// Book.publisher = 'Penguin';
// console.log(Book.publisher);
// object types 
// location
// let person : {_name: string, age: number, locations: string} = {
//     _name : 'Hari',
//     age: 25, 
//     locations : 'Hyderabad'
// }
// optional parameters 
function fun(a, b) {
    if (!b) {
        return a;
    }
    return a + b;
}
fun(10);
fun(10, 20);
// default parameters - default values to parameters 
// function fun(a: number = 98, b: number = 99): number {
//     return a + b;
// }
// fun();
// fun(10);
// fun(10, 20);
// fun(10, 20, 30);
// Union types 
// let id: number;
// let eid: number | string ;
// let eeid: any;
// eid = 101;
// eid = 'abc';
// // eid = true;
// function fun(eid: number | string) {
//     return eid;
// }
// fun(10);
// fun('aa');
// fun(true);
// never 
// function fun(arg: string): never {
//     throw new Error(arg);
// }
// fun('Hi');
// tuple 
// let user: [number, string, boolean] = [10, 'names', true];
// let num_array: [number, number, number, number, number,] = [1, 2, 3, 4, 5];
// let numArr: number[] = [10, 20, 30];
// function display(id: number, name: string) : number {
//     console.log("Id = " + id + ", Name = " + name);
//     return id;
// }
// display(10, 'a');
// let add = (a: number, b: number) : number => { return a + b};
// console.log(add(10, 20));
// let info : {
//     id: number;
//     name: string;
// }
// info = {id : 101, name : 'Anil'};
// console.log(info.id, info.name);
