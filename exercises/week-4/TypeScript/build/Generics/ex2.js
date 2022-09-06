"use strict";
class GenericArray {
    constructor(array) {
        this.array = array;
    }
    addNumber(value) {
        this.array.push(value);
    }
    sum() {
        let sum = 0;
        this.array.forEach(elem => {
            if (typeof elem === "number" || typeof elem === "string") {
                sum += this.getNumValue(elem);
            }
        });
        return sum;
    }
    getNumValue(val) {
        if (typeof val === 'string') {
            const num = parseInt(val);
            return !isNaN(num) ? num : 0;
        }
        else {
            return val;
        }
    }
}
const numbers1 = new GenericArray(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new GenericArray([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
//# sourceMappingURL=ex2.js.map