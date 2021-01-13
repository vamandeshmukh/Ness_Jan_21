// * problem statement - async behaviour of JS 

// const doFun = () => {
//     setTimeout( () => {
//         return { val: 'Hello!' };
//     } , 2000);
// } 
// const fun = doFun();
// console.log(fun.val);

// using async await 

let doFun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error)
                resolve({ val: 'Hello!' });
            else
                reject({ val: 'Sorry, Not Hello!' }); // empty 
        }, 2000);
    }
    );
}

async function funCall() {
    try {
        const fun = await doFun();
        console.log(fun.val);
        return fun;    
    }
    catch(error) {
        console.log('Someting is wrong!');
        return Object;
    }
}

funCall().then(f => { console.log(f.val) });

// doFun().then(f => { console.log(f.val) });

