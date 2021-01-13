// pincode-validator.ts
/// <reference path="string-validator.ts" />
namespace Validation {
    export class PincodeValidator implements StringValidator {
        isValid(s: string): boolean {
            return s.length === 6;
        }
    }
}