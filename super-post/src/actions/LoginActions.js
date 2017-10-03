import Dispatcher from '../Dispatcher';

class LoginActions {

    onLogin(email, password) {
        console.log("Login", email, password);

        Dispatcher.dispatch({
            type: "LOGIN_LOADING",
            active: true
        });

        fetch("http://badillosoft.herokuapp.com/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email, password })
        }).then(result => result.json())
        .then(data => {
            console.log("Login response", data);

            Dispatcher.dispatch({
                type: "LOGIN_LOADING",
                active: false
            });

            if (data.error) {
                Dispatcher.dispatch({
                    type: "LOGIN_ERROR",
                    message: data.error
                });
                return;
            }
            Dispatcher.dispatch({
                type: "ON_LOGIN",
                username: data.username,
                token: data.token
            });
        });
    }

}

export default new LoginActions();