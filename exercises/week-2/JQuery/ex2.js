$("button").on("click", function () {
    $("#my-list").append(`<li class="item">${$(".human").val()}</li>`);
    $(".human").val("");
});
$("#my-list").on("click", ".item", function () {
    $(this).remove();
    console.log("hi");
});
