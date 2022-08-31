const posts = [
    {
        name: "Adi",
        text: "hello",
    },
    {
        name: "Aviv",
        text: "hello",
    },
    {
        name: "Shani",
        text: "hello",
    },
];
const render = function () {
    for (const post of posts) {
        $("#posts").append(`<div id="post">${post.name} ${post.text}</div>`);
    }
};
render();
$("button").on("click", function () {
    const post = { name: $("#name").val(), text: $("#text").val() };
    posts.push(post);
    $("#posts").text("");
    render();
});
