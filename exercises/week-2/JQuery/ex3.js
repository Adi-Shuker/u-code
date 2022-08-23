$("body").append("<div id='first' class='box'></div>");
$("body").append("<div id='second' class='box'></div>");
$("body .box").hover(function () {
    const id = $(this).attr("id");
    if (id === "first") {
        $("#second").css("background-color", "red");
    } else {
        $("#first").css("background-color", "red");
    }
    $(`#${id}`).css("background-color", "#8e44ad");
});
