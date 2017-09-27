import React, { Component } from 'react';

export class Image extends Component {

    render() {
        return (
            <div className="image-item">
                <img src={ this.props.url } />
                <p>{ this.props.desc }</p>
            </div>
        );
    }

}

// <Image url="http://placehold.it/300x300" desc="Esta es una imagen de ejemplo" />