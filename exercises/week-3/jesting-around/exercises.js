class Exercises {
    constructor() {}
    //should return true if n is even, false otherwise
    isEven(n) {
        if (typeof n === "number") {
            return n % 2 == 0 ? true : false;
        }
        return false;
    }
    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            let numItemsToRemove =
                Math.floor(Math.random() * (arr.length - 1)) + 1;
            arr.splice(0, numItemsToRemove);
            return arr;
        }
        return { error: "invalid input" };
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        if (typeof str === "string") {
            let symbols = ["!", "#", ".", ",", "'"];
            return str
                .split("")
                .filter((c) => symbols.indexOf(c) == -1)
                .join("");
        }
        return { error: "invalid input" };
    }
    validate(booleans) {
        let trueCounter = 0;
        let falseCounter = 0;
        if (
            !Array.isArray(booleans) ||
            !booleans.filter((item) => typeof item === "boolean").length
        ) {
            return { error: "Need at least one boolean" };
        } else {
            booleans.forEach((item) => {
                if (typeof item === "boolean") {
                    if (item) {
                        trueCounter++;
                    } else {
                        falseCounter++;
                    }
                }
            });
        }
        return trueCounter > falseCounter ? true : false;
    }
}

module.exports = Exercises;
