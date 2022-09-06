var $ = require("jquery");
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("");
const jquery = require("jquery")(dom.window);
// class APIManager {
//     fetch() {
//         return $.get("/data");
//     }
// }

// class Renderer {
//     render(dataPromise) {
//         dataPromise.then(function (data) {
//             $("#body").append(`<div>${data}</div>`);
//         });
//     }
// }

// const apiManager = new APIManager();
// const renderer = new Renderer();

// let initialDataPromise = apiManager.fetch();
// renderer.render(initialDataPromise); //initial page load

// $(".some-thing").on("click", function () {
//     let newDataPromise = apiManager.fetch();
//     renderer.render(newDataPromise);
// });
//ex1
jquery.get("https://random-word-api.herokuapp.com/word").then((word) => {
    console.log(word);
    const getGif = jquery.get(
        `https://api.giphy.com/v1/gifs/search?api_key=WWeGuariFV64Z2aTN289nUm9ME5sHxGf&q=${word}`
    );
    const getBook = jquery.get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    );
    Promise.all([getGif, getBook]).then(function (results) {
        console.log(results[0], results[1]);
    });
});
