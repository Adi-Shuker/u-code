// Functions
localStorage.setItem("name", "Shoobert");

// Object
localStorage.name = "Shoobert";

// Object
localStorage["name"] = "Shoobert";
//localStorage.getItem('name')
//'Shoobert'
//localStorage.removeItem('name')
// localStorage.clear()
localStorage.personalData = JSON.stringify({
    averageTimeOnSite: { unit: "hr", amt: 9 },
    probabilityOfFriends: 0.02,
    commonKeywords: ["salsa for one", "1 vs. none Chess"],
});
let userStuff = JSON.parse(localStorage.personalData);

console.log(userStuff.probabilityOfFriends); //prints 0.02
let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11,
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 },
    ],
};
localStorage.userStorage = JSON.stringify(userStorage);
let data = JSON.parse(localStorage.userStorage);
console.log(data.cart[data.cart.length - 1].count);
data = JSON.parse(localStorage.dataThatIsImportant || "[]");

const getIdWrapper = function () {
    let counter = 0;
    return function () {
        return counter++;
    };
};
const getId = getIdWrapper();
//exercises
const wisdom = [];
$(".add-input").on("click", function () {
    const text = $("input").val();

    $("input").val("");
    wisdom.push({ id: getId(), text: text });
    const source = $("#menu-template-with-if").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ wisdom: wisdom });
    $(".inputs").empty();
    $(".inputs").append(newHTML);
    if (wisdom.length % 2 === 0) {
        localStorage.wisdom = JSON.stringify(wisdom);
    }
});
const source = $("#menu-template-with-if").html();
const template = Handlebars.compile(source);
const localStorageHTML = template({
    wisdom: JSON.parse(localStorage.wisdom),
});
$(".wisdom").empty();
$(".wisdom").append(localStorageHTML);

$(".clear-wisdom").on("click", function () {
    localStorage.removeItem("wisdom");
});

$(".remove-wisdom").on("click", function () {
    const wisdomId = $(this).closest("li").data().id;
    const wisdom = JSON.parse(localStorage.getItem("wisdom")).filter(
        (item) => item.id !== wisdomId
    );

    localStorage.wisdom = JSON.stringify(wisdom);
});
