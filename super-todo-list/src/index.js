import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <div>
        <App id="1" title="Tareas del Trabajo" />
        <App id="2" title="Tareas de la Casa" />
        <App id="3" title="Tareas de los Hijos" />
        <App id="4" />
    </div>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
