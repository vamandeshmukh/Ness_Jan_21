
// * problem statement - async behaviour of JS 

// const doFun = () => {
//     setTimeout( () => {
//         return { val: 'Hello!' };
//     } , 2000);
// } 
// const fun = doFun();
// console.log(fun.val);

// 1. solution using call back 

// const doFun = (abc) => {
//     setTimeout(() => {
//         abc({ val: 'Hello!' });
//     }, 2000);
// }

// doFun((fun) => {
//     console.log(fun.val);
// });

// 2. Using Promise 

let doFun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error)
                resolve({ val: 'Hello!' });
            else
                reject(); // empty 
        }, 2000);
    }
    );
}

doFun().then(abc => {
    console.log(abc.val);
})
    .then(() => { console.log('second then') })
    .catch(err => {
        console.log('Something is wrong!')
    });

