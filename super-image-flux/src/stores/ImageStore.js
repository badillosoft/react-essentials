import { ReduceStore } from 'flux/utils';
import Dispatcher from '../Dispatcher';

class ImageStore extends ReduceStore {

    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            image: "http://placehold.it/600x800",
            name: "http://placehold.it/600x800",
            date: new Date().toLocaleString()
        };
    }

    reduce(state, action) {
        switch(action.type) {
            case "ON_IMAGE":
                return {
                    image: action.image,
                    name: action.name,
                    date: new Date().toLocaleString()
                };
            default:
                return state;
        }
    }

}

export default new ImageStore();