// let calc_num: string | number = "John";
// const new_num = calc_num + "Smith"; // No exception as in the previous line we initialized the type to be string
// function calc(num: string | number): string | number {
//     return num;
// }

// const calc_num = calc(4);
// const new_num = calc_num + 4; // ERROR: Supposed to be a 'number' type, but throws an error
function calc<Type>(num: Type): Type {
    return num;
}
const str = calc("hello")
const temp = str + 5
console.log(temp)
const calc_num = calc(4);
const new_num = calc_num + 4; // No error is thrown.
// function calc<Type>(num: Type): Type {
//     return num;
// }

// const first_name = calc<string>('John');
// const full_name = first_name + ' Sagi'; // No error is thrown.

//ex1
type sumType = string| string[]| number| number[];

function genericSum<sumType>(num: sumType): number {
    let sum = 0
    if(typeof num === "number"){
        return num;
    }else if(typeof num === "string" && !Number.isNaN(parseInt(num))){
        return Number.parseInt(num);
    }else if(Array.isArray(num)) {
        num.forEach(item => {
           if(typeof item === "string" && !Number.isNaN(parseInt(item))){
            sum+=Number.parseInt(item)
           } else if(typeof item === "number"){
                sum+=item
           }
        });
    }
    return sum;
}
console.log(genericSum("5"))
console.log(genericSum([1,2,3]))
console.log(genericSum("23"));
console.log(genericSum("Tomer"));
console.log(genericSum(44));
console.log(genericSum(["test", 22, 55, "block", "9"]));
console.log(genericSum([23, 433, 11]));

