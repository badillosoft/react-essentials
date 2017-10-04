import Dispatcher from '../Dispatcher';

class PostActions {

    addPost(username, content) {
        fetch("http://badillosoft.herokuapp.com/api/post/new", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                content
            })
        }).then(result => result.json())
        .then(data => {
            if (data.error) {
                Dispatcher.dispatch({
                    type: "POST_ERROR",
                    message: data.error
                });
                return;
            }

            Dispatcher.dispatch({
                type: "POST_ADD",
                post: data.post
            });
        });
    }

    getPosts() {
        fetch("http://badillosoft.herokuapp.com/api/posts")
            .then(result => result.json())
            .then(data => {
                if (data.error) {
                    Dispatcher.dispatch({
                        type: "POST_ERROR",
                        message: data.error
                    });
                    return;
                }

                Dispatcher.dispatch({
                    type: "POST_GET",
                    posts: data.posts
                });
            });
    }

}