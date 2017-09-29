import React, { Component } from 'react';

export default class ImageViewer extends Component {

    render() {
        return (
            <div>
                <img width="600px" height="800px" src={this.props.image} />
                <h1>Nombre: {this.props.name}</h1>
                <h2>Última actualización: {this.props.date}</h2>
            </div>
        );
    }

}