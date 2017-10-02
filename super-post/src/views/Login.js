import React, { Component } from 'react';
import logo from '../logo.svg';
import './Login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    updateEmail(newEmail) {
        this.setState({
            email: newEmail
        });
    }

    updatePassword(newPassword) {
        this.setState({
            password: newPassword
        });
    }

    render() {
        return (
            <div className="login">
                <h1 className="text-center">Super Post</h1>
                <img src={logo} />
                <form action="" method="post">
                    <div className="form-input">
                        <label for="frm-email" >Correo</label>
                        <input onChange={ e => updateEmail(e.target.value) } className="form-control" id="frm-email" name="frm-email" type="text" placeholder="correo" />
                    </div>
                    <div className="form-input">
                        <label for="frm-password" >Contraseña</label>
                        <input onChange={ e => updatePassword(e.target.value) } className="form-control" id="frm-password" name="frm-password" type="password" placeholder="contraseña" />
                    </div>
                    <div className="form-input">
                        <input className="form-control btn btn-primary" type="submit" value="Ingresar" />
                    </div>
                </form>
            </div>
        );
    }

}