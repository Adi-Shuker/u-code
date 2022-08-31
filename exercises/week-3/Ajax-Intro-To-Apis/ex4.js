const fetch = function () {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=WWeGuariFV64Z2aTN289nUm9ME5sHxGf&q=cheeseburgers`,
        success: function (data) {
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
fetch();
