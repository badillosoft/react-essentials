import { ReduceStore } from 'flux/utils';
import Dispatcher from '../Dispatcher';

class PostStore extends ReduceStore {

    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            posts: []
        };
    }

    reduce(state, action) {

        // const posts = state.posts;
        const { posts } = state;

        switch (action.type) {
            case "POST_ADD":
                posts.unshift(action.post);
                return {
                    posts
                };
            case "POST_GET":
                return {
                    posts: action.posts
                };
            default:
                return state;
        }

    }

}

export default new PostStore();