import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ImageGallery } from './ImageGallery';

class App extends Component {
  render() {

    const images_1 = [];

    for (let i = 0; i < 30; i++) {
      images_1.push({
        url: "http://placehold.it/300x300",
        desc: `Galería 1: Imagen ${i + 1}`,
      });
    }

    const images_2 = [];

    for (let i = 0; i < 20; i++) {
      images_2.push({
        url: "http://placehold.it/300x300",
        desc: `Galería 2: Imagen ${i + 1}`,
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ImageGallery images={images_1} title="Galería de Imágenes" />
        <ImageGallery images={images_2} title="Galería de Imágenes [2]" />
      </div>
    );
  }
}

export default App;
