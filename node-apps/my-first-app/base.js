// module.exports.fun = fun; // older way *

// const fun = () => console.log('fun');
// export { fun }; // ES6 onwards - way 1 

// export const fun = () => console.log('fun'); // way 2 
// import { fun } from './base.js'; // import for way 2  

// const fun = () => console.log('fun');
// export default fun; // way 3, recommended, if the module has only one exportable member   
// import fun from './base.js'; // import for way 3  

// multiple exportable members - way 4 
const fun = () => console.log('fun');
const num = 10;
export { fun, num };
abc = 10;

