import React, { Component } from 'react';
import { Image } from './Image';

export class ImageGallery extends Component {

    render() {
        const images = this.props.images.map(image => {
            return <Image url={ image.url } desc={ image.desc } />
        });

        return (
            <div>
                <h1>{ this.props.title }</h1>
                <div className="image-gallery">
                    { images }
                </div>
            </div>
        );

    }

}