// string-validator.ts
namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }
}
