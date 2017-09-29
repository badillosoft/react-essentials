import React, { Component } from 'react';
import { Container } from 'flux/utils';

import ImageStore from '../stores/ImageStore';
import ImageActions from '../actions/ImageActions';

import ImageLoader from '../views/ImageLoader';
import ImageViewer from '../views/ImageViewer';

class ImageContainer extends Component {

    static getStores() {
        return [ImageStore];
    }

    static calculateState(prevState) {
        return {
            imageStore: ImageStore.getState(),
            onImage: ImageActions.onImage
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <ImageLoader onImage={this.state.onImage} />
                    </div>
                    <div className="col-2">
                        <ImageViewer image={this.state.imageStore.image}
                            name={this.state.imageStore.name}
                            date={this.state.imageStore.date} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Container.create(ImageContainer);