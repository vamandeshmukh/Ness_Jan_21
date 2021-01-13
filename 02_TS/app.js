// pincode-validator.ts
/// <reference path="string-validator.ts" />
var Validation;
(function (Validation) {
    var PincodeValidator = /** @class */ (function () {
        function PincodeValidator() {
        }
        PincodeValidator.prototype.isValid = function (s) {
            return s.length === 6;
        };
        return PincodeValidator;
    }());
    Validation.PincodeValidator = PincodeValidator;
})(Validation || (Validation = {}));
// username-validator.ts
/// <reference path="string-validator.ts" />
var Validation;
(function (Validation) {
    var UsernameValidator = /** @class */ (function () {
        function UsernameValidator() {
        }
        UsernameValidator.prototype.isValid = function (s) {
            return s.indexOf(' ') < 0;
        };
        return UsernameValidator;
    }());
    Validation.UsernameValidator = UsernameValidator;
})(Validation || (Validation = {}));
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
// app.ts
var v1 = new Validation.UsernameValidator();
console.log('Username Validator: ', v1.isValid('hari krishna'));
var v2 = new Validation.PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));
// output
// Username Validator: false
// Pincode Validator: true
