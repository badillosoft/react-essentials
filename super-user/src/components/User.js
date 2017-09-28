import React, { Component } from 'react';

export default class User extends Component {

    render() {
        return (
            <div>
                <img src={this.props.picture} />

                <h1>{this.props.displayName}</h1>
                <h2>Email: {this.props.email}</h2>
                <h3>Tel. {this.props.phoneNumber}</h3>
                <h4>Dirección: {this.props.address}</h4>
            </div>
        );
    }

}