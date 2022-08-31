//start, deleteCount, item1, item2, itemN
const splice = function (arr) {
    const args = [...arguments];
    const start = args[1];
    let deleteCount = args[2] || arr.length;
    const items = args.slice(3, args.length);
    temp = arr.filter((item, index) => {
        deleteCount--;
        return index >= start && deleteCount;
    });
    for (let index = 0; index < temp.length; index++) {
        arr[index] = temp[index];
    }
    arr.length = temp.length;
    return;
};
let arr = [1, 2, 3];
splice(arr, 0, 1);
console.log(arr); //should be [2,3]
// add 1 element
arr = [1, 2, 3];
splice(arr, 0, 0, 0);
console.log(arr); //should be [0,1,2,3]
