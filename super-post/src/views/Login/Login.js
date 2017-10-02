import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            submitted: false
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

    login(e) {
        e.preventDefault();

        this.setState({
            submitted: true
        });

        if (!e.target.checkValidity()) {
            alert("Error en formulario");
            return;
        }

        this.props.onLogin(this.state.email, this.state.password);
    }

    render() {
        let alert = null;
        let loading = null;

        if (this.props.error) {
            alert = <div class="v-space alert alert-danger" role="alert">
                {this.props.error}
            </div>;
        }

        if (this.props.loading) {
            loading = <div className="v-space text-center spinner">
                <i className="fa fa-circle-o-notch fa-spin"></i>
            </div>;
        }

        if (this.props.success) {
            return null;
        }

        return (
            <div className="login">
                <h1 className="text-center">Super Post</h1>
                <img src={logo} />
                <form onSubmit={e => this.login(e)}>
                    <div className="v-space form-input">
                        <label htmlFor="frm-email" >Correo</label>
                        <input required={this.state.submitted} onChange={e => this.updateEmail(e.target.value)} className="form-control" id="frm-email" name="frm-email" type="text" placeholder="correo" />
                    </div>
                    <div className="v-space form-input">
                        <label htmlFor="frm-password" >Contraseña</label>
                        <input required={this.state.submitted} onChange={e => this.updatePassword(e.target.value)} className="form-control" id="frm-password" name="frm-password" type="password" placeholder="contraseña" />
                    </div>
                    <div className="v-space form-input">
                        <input className="form-control btn btn-primary" type="submit" value="Ingresar" />
                    </div>
                </form>
                {alert}
                {loading}
            </div>
        );
    }

}