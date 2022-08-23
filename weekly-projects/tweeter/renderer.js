const Renderer = function () {
    const renderPosts = (posts) => {
        $("#posts").empty();
        let str = "";
        for (const post of posts) {
            str = "";
            str += `<div class="post" data-id=${post.id}><div class="delete" >x</div><div class="post-text">${post.text}<div class="comments">`;
            for (const comment of post.comments) {
                str += `<div class="comment" data-id=${comment.id}><div class="delete-comment">x</div><div>${comment.text}</div></div>`;
            }
            str +=
                "</div></div>" +
                "<div class='add-comment-container'>" +
                "<input id='comment' placeholder='write a comment'></input>" +
                "<button class='add-comment-button'>comment</button></div>";
            $("#posts").append(str);
        }
    };
    return {
        renderPosts,
    };
};
