$("button").on("click", function () {
    $("#my-list").append(`<li>${$(".human").val()}</li>`);
    $(".human").val("");
});
