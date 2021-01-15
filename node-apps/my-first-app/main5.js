
const path = require('path');

console.log(path.basename('/test/something'));
console.log(path.basename('/test/something.txt'));
console.log(path.basename('/test/something.txt', '.txt'));
