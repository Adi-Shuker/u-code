const StringFormatter = function () {
    const capitalizeFirst = (str) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const skewerCase = (str) => str.replace(" ", "/");
    return {
        capitalizeFirst,
        skewerCase,
    };
};
const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
console.log(formatter.skewerCase("blue box")); //should print blue-box
