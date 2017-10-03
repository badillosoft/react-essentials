import React, { Component } from 'react';
import { Container } from 'flux/utils';

import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import Login from '../views/Login/Login';

class LoginContainer extends Component {

    static getStores() {
        return [ LoginStore ];
    }

    static calculateState(prevState) {
        return {
            loginStore: LoginStore.getState(),
            onLogin: LoginActions.onLogin,
        };
    }

    render() {
        if (!this.state.loginStore.logout) {
            return null;
        }

        return <Login 
            error={this.state.loginStore.error}
            loading={this.state.loginStore.loading}
            onLogin={ (email, password) => this.state.onLogin(email, password) }
        />;
    }

}

export default Container.create(LoginContainer);