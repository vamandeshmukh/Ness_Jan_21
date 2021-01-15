// handling async using callbacks in Node 

// const someAPIMethod = (x, y, callback) => {
//     // 
//     callback(new Error('some error'));
//     callback(null, result);
// }
// someAPIMethod('abc', 'abcd', (error, result) => { console.log('code') });


// fun('a', 'b', () => {});

const sum = (x, y, callback) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        callback(new Error('arguments to be added are not numbers'));
        // return;
    }
    callback(null, x + y);
}

sum(true, 20, (error, result) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log('result is ', result);
});
