var validator = require("validator");
var faker = require("@faker-js/faker");

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
validator.isEmail("shoobert@dyla"); //=> true

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
validator.isMobilePhone("786-329-9958", "en-US");

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist));

//ex2
const makeHuman = (number) => {
    for (let i = 0; i < number; i++) {
        console.log(faker.faker.name.firstName());
        console.log(faker.faker.image.cats());
        console.log(faker.faker.company.name());
    }
};
makeHuman(2);
