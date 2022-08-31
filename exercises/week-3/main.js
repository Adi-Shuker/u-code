class Human {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    introduce() {
        console.log(`hi ${this.name}`);
    }
}

const h = new Human("Adi", 24);
// class Vehicle {
//     constructor(x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         Vehicle.carsSold++;
//     }

//     static getInfo() {
//         console.log("Cars are great");
//     }
//     static calculateMoney() {
//         Vehicle.carsSold *= 30000;
//         return Vehicle.carsSold;
//     }
// }
// Vehicle.carsSold = 0;
// console.log(Vehicle.carsSold);
// new Vehicle();
// new Vehicle();
// new Vehicle();
// console.log(Vehicle.calculateMoney());

class Vehicle {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel;
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive");
        }
        this._speed = speed;
    }
    get speed() {
        return this._speed;
    }
    get fuel() {
        return this._fuel;
    }

    set fuel(amount) {
        if (amount > 150) {
            return console.log("Too much");
        }
        if (amount < 0) {
            return console.log("Not reasonable");
        }
        this._fuel = amount;
    }
}

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined
