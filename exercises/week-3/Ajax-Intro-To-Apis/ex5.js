const fetch = function (gifName) {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=WWeGuariFV64Z2aTN289nUm9ME5sHxGf&q=${gifName}`,
        success: function (data) {
            $("div").empty();
            $("div").append(
                `<iframe src="${data.data[0].embed_url}"></iframe>`
            );
            console.log(data.data[0].embed_url);
        },
        error: function (xhr, text, error) {
            console.log(text);
        },
    });
};
$("button").on("click", function () {
    const value = $("input").val();
    fetch(value);
});
