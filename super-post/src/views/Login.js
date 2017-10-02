import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div>
                <form action="" method="post">
                    <div className="form-input">
                        <label for="frm-email" >Correo</label>
                        <input className="form-control" id="frm-email" name="frm-email" type="text" placeholder="correo" />
                    </div>
                    <div className="form-input">
                        <label for="frm-password" >Contraseña</label>
                        <input className="form-control" id="frm-password" name="frm-password" type="password" placeholder="contraseña" />
                    </div>
                </form>
            </div>
        );
    }

}