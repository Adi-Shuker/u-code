class GenericArray<Type>{
    constructor(private array:Type[]){}
    addNumber(value:Type){
        this.array.push(value)
    }
    
   sum(): number {
    let sum: number = 0;
        this.array.forEach(elem => {
            if(typeof elem==="number" ||typeof elem==="string"){
            sum += this.getNumValue(elem)
        }}); 
        return sum;
    }   
    

getNumValue(val: number|string): number {
    if (typeof val === 'string') {
        const num: number = parseInt(val);
        return !isNaN(num) ? num : 0;
    } else {
        return val;
    }
}
}
const numbers1: GenericArray<string> = new GenericArray<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: GenericArray<number> = new GenericArray<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);