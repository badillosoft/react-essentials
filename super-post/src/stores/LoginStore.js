import { ReduceStore } from 'flux/utils';
import Dispatcher from '../Dispatcher';

class LoginStore extends ReduceStore {

    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            logout: true,
            loading: false,
            error: "",
            username: "",
            token: ""
        };
    }

    reduce(state, action) {

        const {
            logout,
            loading,
            error,
            username,
            token
        } = state;

        switch (action.type) {
            case "ON_LOGIN":
                return {
                    logout: false,
                    loading: false,
                    error: "",
                    username: action.username,
                    token: action.token
                };
            case "LOGIN_LOADING":
                return {
                    logout,
                    loading: action.active,
                    error,
                    username,
                    token
                };
            case "LOGIN_ERROR":
                return {
                    logout,
                    loading,
                    error: action.message,
                    username,
                    token
                };
        }

        console.log("Login state", state);

        return state;

    }

}

export default new LoginStore();