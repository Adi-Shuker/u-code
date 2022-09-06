//copy dest to source
const copy = (source, dest) => {
    for (let index = 0; index < dest.length; index++) {
        source[index] = dest[index];
    }
    source.length = dest.length;
};

Array.prototype.splice = function () {
    let [start, deleteCount, ...items] = [...arguments];
    deleteCount = deleteCount ?? this.length - start;
    const deleteItems = [];
    const arrAfterDelete = this.filter((item, index) => {
        const shouldRemove = index >= start && deleteCount;
        if (shouldRemove) {
            deleteItems.push(item);
            deleteCount--;
        }
        return !shouldRemove;
    });
    const arrWithItems = [
        ...arrAfterDelete.slice(0, start),
        ...items,
        ...arrAfterDelete.slice(start, arrAfterDelete.length),
    ];
    copy(this, arrWithItems);
    return deleteItems;
};
// remove 1 element
let arr = [1, 2, 3];
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
arr.splice(1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be []
