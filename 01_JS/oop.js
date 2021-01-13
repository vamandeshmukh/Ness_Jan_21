
// class Book {
//     constructor(name, author) {
//         this.name = name;
//         this.author = author;
//     }
//     show() { // non static method 
//         console.log(this.name);
//         console.log(`Book name is ${this.name}.`);
//         console.log("Author name is " + this.author + ".");
//     }
//     static m1(price) { // static method 
//         console.log(`The price of the book is Rs.${price}.`);
//     }
// }

// const book1 = new Book('Let Us C', 'Kanitkar');
// console.log(book1.name);
// console.log(book1.author);
// book1.show();
// Book.m1(499);


class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(); // necessary for a sub-class 
        this.color = color;
    }
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog('Cooper');
dog.bark();    // Woof! Woof!
dog.move(10);  // Cooper moved 10m.
