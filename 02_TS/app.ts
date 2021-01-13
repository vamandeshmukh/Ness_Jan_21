// // app.ts
// interface StringValidator {
//     // returns true if the input parameter is valid, false otherwise
//     isValid(s: string): boolean;
// }
// class PincodeValidator implements StringValidator {
//     // returns true if the input parameter is 6 character long, false otherwise
//     isValid(s: string): boolean {
//         return s.length === 6;
//     }
// }
// class UsernameValidator implements StringValidator {
//     // returns true if the input parameter has no spaces, false otherwise
//     isValid(s: string): boolean {
//         return s.indexOf(' ') < 0;
//     }
// }

// // app.ts
// const v1 = new UsernameValidator();
// console.log('Username Validator:', v1.isValid('hari krishna'));
// const v2 = new PincodeValidator();
// console.log('Pincode Validator:', v2.isValid('560001'));
// // output
// // Username Validator: false
// // Pincode Validator: true


// app.ts
namespace Validation { // define a namespace
    // export members to provide visibility outside the namespace 
    export interface StringValidator {
        isValid(s: string): boolean;
    }
    // export class PincodeValidator implements StringValidator {
    //     isValid(s: string): boolean {
    //         return s.length === 6;
    //     }
    // }
    // export class UsernameValidator implements StringValidator {
    //     isValid(s: string): boolean {
    //         return s.indexOf(' ') < 0;
    //     }
    // }
}

// app.ts
const v1 = new Validation.UsernameValidator();
console.log('Username Validator: ', v1.isValid('hari krishna'));
const v2 = new Validation.PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));
// output
// Username Validator: false
// Pincode Validator: true

