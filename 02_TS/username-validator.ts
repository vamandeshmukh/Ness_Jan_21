// username-validator.ts
/// <reference path="string-validator.ts" />
namespace Validation {
    export class UsernameValidator implements StringValidator {
        isValid(s: string): boolean {
            return s.indexOf(' ') < 0;
        }
    }
}