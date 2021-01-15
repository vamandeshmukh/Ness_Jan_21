// async fun = () => { // why async, why not sync?
//     await ...;
// };

// common tasks in node app 
// file system 
// many such modules provide sync and async ways, prefer async  

// reading data from a file 

import fs from 'fs';
fs.readFile('delete2.txt', 'utf8', (error, data) => { // 'utf8', optional, but recommended 
    if (error) {
        console.log(error.message);
        return; // important 
    }
    console.log(data.toString());
});

fs.writeFile('myfile', 'This data will be written.', (error) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log('wrote');
});

// try {
//     const data = fs.readFileSync('delete2.txt', 'utf8');
//     console.log(data);
// }
// catch (error) {
//     console.log(error.message);
// }

console.log('done');

