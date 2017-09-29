import React, { Component } from 'react';

export default class ImageLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: "http://placehold.it/200x200"
        };

    }


    loadFile(file) {
        const reader = new FileReader();

        reader.addEventListener("load", e => {
            this.updateThumb(e.target.result);
        });

        reader.readAsDataURL(file);
    }

    updateThumb(image) {
        this.setState({
            image: image
        });
    }

    uploadImage() {
        if (this.props.onImage) {
            this.props.onImage(this.state.image);
        }
    }

    render() {
        return (
            <div>
                <input onChange={e => this.loadFile(e.target.files[0])} type="file" />
                <br />
                <img width="200px" height="200px" src={this.state.image} />
                <br />
                <button onClick={ e => this.uploadImage() } >Guardar</button>
            </div>
        );
    }

}