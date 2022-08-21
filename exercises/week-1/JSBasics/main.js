let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;
let yearsSincePurchase = 0;

if (boughtTesla && isUSCitizen) {
    yearsSincePurchase = currentYear - yearOfTeslaPurchase;
}
if (yearsSincePurchase >= 4) {
    console.log("Would you like an upgrade?");
} else {
    console.log("Are you satisfied from the car?");
}
if (!isUSCitizen && boughtTesla) {
    console.log("Would you like to move to US?");
}
if (!boughtTesla) {
    console.log("Do you wand to buy a Tesla?");
}

// //arrays
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.splice(1, 2);
// console.log(numbers);
// numbers[3] = 1;
// console.log(numbers);
// numbers.splice(numbers.length - 4);
// console.log(numbers);
// numbers.splice(0, 0, 0);
// console.log(numbers);

// //objects
// const p1 = { name: "Adi", age: "24", city: "Ashkelon" };
// const p2 = { name: "Shani", age: "24", city: "Tel-Aviv" };
// if (p1.age == p2.age && p1.city == p2.city) {
//     console.log("Jill wanted to date Robert");
// }
// if (p1.city != p2.city) {
//     console.log("Jill wanted to date Robert, but couldn’t");
// }
// const library = {
//     books: [
//         { title: "A", author: "A" },
//         { title: "B", author: "B" },
//         { title: "C", author: "C" },
//     ],
// };

// //loops
// //ex1
// const names = ["Ashley", "Donovan", "Lucas"];
// const ages = [23, 47, 18];
// const people = [];
// for (let nameIndex in names) {
//     people.push({ name: names[nameIndex], age: ages[nameIndex] });
// }
// console.log(people);
//ex3
// const posts = [
//   { id: 1, text: "Love this product" },
//   { id: 2, text: "This is the worst. DON'T BUY!" },
//   { id: 3, text: "So glad I found this. Bought four already!" },
// ];
// let postToRemove = 0;
// for (let postIndex in posts) {
//   if (posts[postIndex].id == 2) {
//     postToRemove = postIndex;
//     break;
//   }
// }
// posts.splice(postToRemove, 1);
// console.log(posts);
//ex4
const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: [],
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" },
        ],
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: [],
    },
];

let isCommentFound = false;
for (let post of posts) {
    if (post.id == 2) {
        for (let commentIndex in post.comments) {
            if (post.comments[commentIndex].id == 3) {
                post.comments.splice(commentIndex, 1);
                isCommentFound = true;
                break;
            }
        }
    }
    if (isCommentFound) {
        break;
    }
}
console.log(posts);

//functions
//ex1
function isEven(num) {
    return num % 2 === 0;
}
console.log("even", isEven(8));
console.log("odd", isEven(9));
//ex2
function printOdd(numbers) {
    for (let num of numbers) {
        if (!isEven(num)) {
            console.log(num);
        }
    }
}
printOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//ex3
function checkExists(arr, num) {
    for (let x of arr) {
        if (x === num) {
            return true;
        }
    }
    return false;
}
console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));
//ex4
const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
};
const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42
//ex5
function increaseByNameLength(money, name) {
    return name.trim().length * money;
}
function makeRegal(name) {
    return "His Royal Highness, " + name;

    
}
const turnToKing = function (name, money) {
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
