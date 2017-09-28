import React, { Component } from 'react';

export default class Login extends Component {

    render() {
        return (
            <div>
                <h1>{ this.props.title || "Acceso de Usuarios" }</h1>

                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />

                <button>ingresar</button>
            </div>
        );
    }

}