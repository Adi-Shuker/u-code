const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("");
const $ = require("jquery")(dom.window);

const fetchDatum = async function () {
    let data = await $.get("https://random-word-api.herokuapp.com/word");
    console.log(data);
};
fetchDatum();

const fetchRecipes = async function (ingredient) {
    const recipe = await $.get(`/recipe/${ingredient}`);
    console.log(recipe);
};

const getArticles = async function () {
    let articles = await $.get("https://random-word-api.herokuapp.com/word");
    return articles;
};

const innocentFunc = async function () {
    let articles = getArticles();
    //render(articles);
};

innocentFunc();
