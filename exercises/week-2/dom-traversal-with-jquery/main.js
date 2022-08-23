$(".remove").on("click", function () {
    console.log(this);
    alert($(this).closest(".post").data().id);
});
// $("button").on("click", function () {
//     let relevantInputValue = $(this).closest("div").find("input").val();
//     alert(relevantInputValue);
// });
// $("button").on("click", function () {
//     console.log($(this).closest("div").find("span").text());
// });
// $("button").on("click", function () {
//     console.log($(".container").find("p").text());
// });

$(".generator").on("click", function () {
    const processorId = $(this).closest("div");
    const parent = processorId.parent("div");
    console.log({
        "Processor ID": processorId.attr("id"),
        "Computer's data-id:": parent.data().id,
        "BUS:": parent.find(".BUS").text(),
    });
});
$(".validator").on("click", function () {
    const computer = $(this).closest(".computer");
    console.log({
        "generator's text:": computer.find(".generator").text(),
        MB: computer.find(".MB").text(),
        QR: [
            computer.find(".QR").first().text(),
            computer.find(".QR").eq(1).text(),
        ],
    });
});
let x = "flap";
let y = { a: "shlop", x: "dub" };
const all = [x, y];
x = all[1].x;
console.log(x);
