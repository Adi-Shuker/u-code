let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9];
let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" },
];
let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
];
//filter return new array should receive a function that returns a boolean
olderThan16 = ages.filter((age) => age > 16);
let orangeVegetables = vegetables.filter((v) => v.color === "orange");
console.log(olderThan16);
//forEach return nothing
console.log(
    people.filter((p) => p.goodPerformance).forEach((p) => (p.salary += 300))
);
people.forEach((p) => console.log(p.salary));
//map return new array -new simple array
let messagesFromDad = [
    "HI HONEY",
    "HOW WAS SCHOOL??",
    "DID YOU EAT TODAY?",
    "I CAN'T FIND THE REMOTE CONTROL",
];
// console.log(messagesFromDad.map((m) => m.toLowerCase()));
let users = [
    {
        name: "Leanne Graham",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: { lat: "-37.3159", lng: "81.1496" },
        },
    },
    {
        name: "Ervin Howell",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: { lat: "-43.9509", lng: "-34.4618" },
        },
    },
];
console.log(
    users.map((u) => {
        return { name: u.name, city: u.address.city };
    })
);
//find return the first elemet that matches the filter

//some receive a condition return true or false
console.log(ages.some((a) => a > 16));
//every receive a condition return true or false
console.log(ages.every((a) => a > 16));
//chaining
