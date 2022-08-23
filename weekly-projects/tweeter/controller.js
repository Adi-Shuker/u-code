const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = function () {
    tweeter.addPost($("#input").val());
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts());
};
$("#posts").on("click", ".delete", function () {
    tweeter.removePost($(this).closest(".post").data().id);
    renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".delete-comment", function () {
    const postId = $(this).closest(".post").data().id;
    const commentId = $(this).closest(".comment").data().id;
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".add-comment-button", function () {
    const postId = $(this).closest(".post").data().id;
    const comment = $(this).siblings("#comment").val();
    tweeter.addComment(postId, comment);
    renderer.renderPosts(tweeter.getPosts());
});
