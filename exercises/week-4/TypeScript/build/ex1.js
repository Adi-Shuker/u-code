"use strict";
const sum = (numbers) => {
    return numbers.reduce((a, b) => a + b);
    // let sum : number = 0; 
    // for(const num of numbers){
    //     sum+=num;
    // }
    // return sum;
};
const isEven = (number) => {
    return !!(number % 2);
};
const numArray1 = [4, 7, 44, 5, 234];
const numArray2 = [65, 33, 5, 2532, 32, 6];
const numArray3 = [54, 6, 656, 4];
console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);
//# sourceMappingURL=ex1.js.map