//ex1
const person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            this.hungry = false;
            //alert("Im no longer hungry!");
        }
    },
};

person.feed(); //should alert "I'm no longer hungry"

//ex2
const pump = function (amount) {
    this.liters += amount;
    console.log("You put " + amount + " liters in " + this.name);
};

const garage = {
    car1: {
        name: "Audi",
        liters: 3,
        fillTank: pump,
    },
    car2: {
        name: "Mercedes",
        liters: 1,
        fillTank: pump,
    },
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);

//ex3
const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fly: function () {
        if (this.fuel < 2) {
            return "on the ground!";
        } else {
            return "flying!";
        }
    },
    fuel: 0,
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());

//ex4
const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (amount) {
        this.coinCount -= amount;
    },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

//ex5
const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!",
};

const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that.",
};

//shoutIt(avi, revealSecret);
//shoutIt(narkis, revealSecret);

//ex6
const coffeeShop = {
    beans: 40,
    money: 100,
    buyBeans: function (numBeans) {
        if (numBeans * 2 > this.money) {
            alert("sorry you cant buy more beans:(");
        } else {
            this.money -= numBeans * 2;
            this.beans += numBeans;
        }
    },
    buyDrink: function (drinkType) {
        if (
            this.drinkRequirements[drinkType] != undefined &&
            this.beans - this.drinkRequirements[drinkType].beanRequirement >= 0
        ) {
            this.money += this.drinkRequirements[drinkType].price;
            this.makeDrink(drinkType);
        } else {
            alert("sorry we cant dige you this drink");
        }
    },
    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 5 },
        doubleShot: { beanRequirement: 15, price: 5 },
        frenchPress: { beanRequirement: 12, price: 5 },
    },

    makeDrink: function (drinkRequirements) {
        if (this.drinkRequirements[drinkRequirements] == undefined) {
            alert("Sorry, we don't make " + drinkRequirements);
        } else if (
            this.beans - this.drinkRequirements[drinkRequirements].price >=
            0
        ) {
            this.beans -=
                this.drinkRequirements[drinkRequirements].beanRequirement;
        } else {
            alert("Sorry, we're all out of beans");
        }
    },
};

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyDrink("latte");
console.log(coffeeShop.money);
coffeeShop.buyDrink("americano");
console.log(coffeeShop.money);
coffeeShop.buyDrink("filtered");
console.log(coffeeShop.money);

const quiz = {
    code: function () {
        console.log(this.answers.c + " is not the answer");
    },
    answers: {
        a: `answers`,
        b: "this is not the answer",
        c: `this`,
        d: `21`,
        e: `both a and c`,
        f: "both a and d",
    },
};
quiz.code();
