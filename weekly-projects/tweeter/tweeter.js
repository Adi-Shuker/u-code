const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" },
            ],
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                {
                    id: "c4",
                    text: "Don't wory second poster, you'll be first one day.",
                },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." },
            ],
        },
    ];
    let _postCounter = 3;
    let _commentCounter = 7;
    const getPosts = () => _posts;
    const addPost = (text) => {
        const post = {
            text: text,
            id: "p" + _postCounter,
            comments: [],
        };
        _postCounter++;
        _posts.push(post);
    };
    const removePost = (postId) => {
        let postToRemoveIndex;
        for (const postIndex in _posts) {
            if (_posts[postIndex].id === postId) {
                postToRemoveIndex = postIndex;
                break;
            }
        }
        if (postToRemoveIndex) {
            _posts.splice(parseInt(postToRemoveIndex), 1);
        }
    };
    const _getPost = (postId) => {
        for (const post of _posts) {
            if (post.id === postId) {
                return post;
            }
        }
    };
    const addComment = (postId, text) => {
        const post = _getPost(postId);
        if (post) {
            post.comments.push({ id: "c" + _commentCounter, text: text });
            _commentCounter++;
        }
    };
    const removeComment = (postId, commentId) => {
        const post = _getPost(postId);
        let commentToRemoveIndex;
        if (post) {
            for (const commentIndex in post.comments) {
                if (post.comments[commentIndex].id === commentId) {
                    commentToRemoveIndex = commentIndex;
                    break;
                }
            }
            post.comments.splice(commentToRemoveIndex, 1);
        }
    };

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,
    };
};
