
let fun = (a, b) => {
    return a + b;
}

let getDate = () => {
    return new Date();
}
console.log(fun('My ', 'India'));
console.log(fun(10, 20));
console.log(fun('10', '20'));
console.log(getDate().toLocaleString());