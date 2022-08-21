let users = [];

const getData = function (displayData) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }];
        console.log("Got users");
        displayData();
    }, 3000);
};

const displayData = function () {
    console.log("Going to display users");
    for (user of users) {
        console.log(user.name);
    }
};

getData(displayData);
const getFormalTitle = (title, name) => title + " " + name;
formalTitle = getFormalTitle("Madamme", "Lellouche");
console.log(formalTitle); //returns "Maddame Lellouche"

const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {
        console.log("You are going to see the name in 3 seconds...");

        setTimeout(() => {
            //normal function
            console.log(this);
            console.log("The name is: " + this.name);
        }, 3000);
    },
};
suspenseBuilder.displayName();
