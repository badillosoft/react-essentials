import React, { Component } from 'react';
import './App.css';
import ImageLoader from './views/ImageLoader';
import ImageViewer from './views/ImageViewer';

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <ImageLoader />
                    </div>
                    <div className="col-2">
                        <ImageViewer image="http://placehold.it/600x800" name="falsa.png" date={new Date().toLocaleString()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
