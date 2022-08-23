//jQuery
// $("#container").hide(); //when we select elements with jQuery, we also get methods that can work on the element, on top of the element itself
// console.log($("#container"));
// //id
// const elem = $("#id");
// //class
// const elems = $(".class-name");
// const header = $("h1");
// console.log(header);
// console.log($);
// //css
// $("h4").css("color", "red");
// $("#b1").addClass("box");
// $("#b2").addClass("box");
// //read input val
// $("#my-input").val("Terabyte");
// const color = $("div").data().color;
// console.log(color); //prints #2980b9
// const barcode = $("#div2").data().barcode;
// //read data() properties only with lower case
// const expirationdate = $("#div2").data().expirationdate;
// console.log($("#div2").data().barcode + " " + expirationdate);
// $("button").click(function () {
//     alert($("#my-input").val());
// });
// $("#div1").hover(function () {
//     $("#div1").css("background-color", "blue");
// });
// $("#b1").hover(function () {
//     console.log($(this));
// });
$(".box").hover(function () {
    // $(this).css("background-color", "blue");
    $(this).remove();
});
const text = "Banana";
const item = $(`<div class=fruit>${text}</div>`);

console.log(item); //the same
$("body").append(item);
$(".feedme").on("click", function () {
    let divCopy = `<div class="feedme">${$(this).text()}</div>`;

    $("body").append(divCopy);
});
const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" },
];
for (let name of names) {
    $("body").append(`<div class="name">${name.first} ${name.last}</div>`);
}
$(".name").remove();
$("button").click(function () {
    $("#blogs").append("<div class='blog'>blog</div>");
});
// $("#blogs").on("click", function () {
//     $(".blog").text("blargh");
// });
$("#blogs").on("click", ".blog", function () {
    $(this).text("blargh");
});

const addDiv = function () {
    $("body").append("<div class=box></div>");
};

$("button").on("click", function () {
    addDiv();
});

$("body").on("click", ".box", function () {
    alert("hi");
});
