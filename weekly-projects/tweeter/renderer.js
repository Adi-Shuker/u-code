const Renderer = function () {
    const renderPosts = (posts) => {
        $("#posts").empty();
        let str = "";
        for (const post of posts) {
            str += `<div class="post" data-id=${post.id}>
                        <div class="delete-post">X</div>
                        <div class="post-text">${post.text}</div>
                        <div class="comments">`;
            for (const comment of post.comments) {
                str += `<div class="comment" data-id=${comment.id}>
                            <span class="delete-comment">X</span>
                            <sapn>${comment.text}</span>
                        </div>`;
            }
            str += `    </div>
                            <div class='add-comment-container'> 
                                <input id='comment' placeholder='write a comment'></input>
                                <button class='add-comment-button'>comment</button>
                            </div>
                    </div>`;
        }
        $("#posts").append(str);
    };
    return {
        renderPosts,
    };
};
