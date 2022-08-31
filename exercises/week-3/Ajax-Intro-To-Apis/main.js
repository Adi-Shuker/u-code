$.get(
    "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
    function (result) {
        console.log(result);
    }
);
$.get(
    "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
    function (result) {
        console.log(result.items[0].volumeInfo.description); //prints A lot of description Text
    }
);
const onButtonClick = function () {
    $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        },
    });
};
$("button").on("click", onButtonClick);
