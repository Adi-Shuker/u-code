const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach((book) => {
                console.log(
                    book.volumeInfo.title,
                    book.volumeInfo.authors,
                    book.volumeInfo.industryIdentifiers
                );
            });
        },
        error: function (xhr, text, error) {
            console.log(text);
        },
    });
};
fetch("title", "The Wise Man's Fears");
