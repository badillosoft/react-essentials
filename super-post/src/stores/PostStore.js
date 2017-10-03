import { ReduceStore } from 'flux/utils';

class PostStore extends ReduceStore {

    getInitialState() {
        return {
            posts: []
        };
    }

    reduce(state, action) {

        // const posts = state.posts;
        const { posts } = state;

        switch (action.type) {
            case "ADD_POST":
                posts.unshift(action.post);
                return {
                    posts
                };
            default:
                return state;
        }

    }

}

export default new PostStore();