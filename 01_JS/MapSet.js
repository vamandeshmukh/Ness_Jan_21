// https://javascript.info/map-set 

let myMap = new Map();

// console.log(myMap.size);

// set(key: any, value: any): Map<any, any>
myMap.set('name', 'Sudesh');
myMap.set(true, 'someValue')

// console.log(myMap.size);
// console.log(myMap.get('name'));

let participants = new Map([
    ['Hari', 28],
    ['Lakshmi', 22],
    ['Sudesh', 24],
    ['Soumya', 28],
    ['Apurba', 25],
]);
console.log(participants.size);

for (let person of participants) { // also use keys() and values() 
    console.log(person);
}

participants.forEach( (value, key) => {
    console.log(`${key} ${value}`);
} );

let mySet = new Set();
mySet.add();
