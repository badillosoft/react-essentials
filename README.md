~# React Essentials

Instructor: Alan Badillo Salas badillo.soft@hotmail.com

## HTML / CSS / Javascript

> Maqueta general de HTML

~~~html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Mi App</title>
        <!-- ESTILOS -->
    </head>
    <body>
        <!-- CONTENIDO -->
        <!-- SCRIPTS -->
    </body>
</html>
~~~

> Integrar diseño CSS - Estilo embebido

~~~html
<head>
    <meta charset="utf-8">
    <title>Mi App</title>
    <!-- ESTILOS -->
    <style>
        button {
            boder-radius: 10px;
        }

        .bg-red {
            background-color: #ff0000;
            font-size: 24pt;
        }
    </style>
</head>
<body>
    <!-- CONTENIDO -->
    <div class="bg-red">
        <h1>Mi App</h1>
    </div>
    <button>aceptar</button>
    <!-- SCRIPTS -->
</body>
~~~

> Integrar Javascript

~~~html
<body>
    <!-- CONTENIDO -->
    <div class="bg-red">
        <h1>Mi App</h1>
    </div>
    <button id="mi-boton">aceptar</button>
    <!-- SCRIPTS -->
    <script>
        const mi_boton = document.getElementById("mi-boton");

        mi_boton.onclick = fuction () {
            alert("Hola mundo");
        };
    </script>
</body>
~~~

## Node JS

> Instalar Node.JS https://nodejs.org/es/

~~~js
const fs = require("fs");

const content = fs.readFileSync("mi_archivo.csv", "utf-8");

console.log(content);
~~~

> Instalar paquetes externos usando NPM

> `$ npm install express`

> `$ npm install mongodb`

## Crear una aplicación en *React*

1. Instalar/Comprobar `create-react-app`

> `$ npm install -g create-react-app`

2. Crear la aplicación

> `$ create-react-app super-todo-list`

3. Ejecturar la aplicación

> `$ cd super-todo-list`

> `$ npm start`

4. Revisar los siguientes archivos importantes:

* __public/index.html__ - Cambiar el título de la aplicación

* __public/manifest.json__ - Cambiar/Definir el nombre de la aplicación

* __src/App.css__ - Cambiar el diseño del componente `App`

* __src/App.js__ - Modificar el componente `App`

* __src/index.css__ - Cambiar/Definir estilos de diseño globales

* __src/index.js__ - Intancia el componente `App`

## Controlar un Evento con React

1. Crear un método controlador `handler` dentro de nuestra clase:

~~~js
class MyComponent extends Component {

    ...

    clickAlertHandler(e) {
        // TODO: Controlar el evento clic
    }

    ...

}
~~~

2. Crear un doble enlace a nuestro controlador en en el constructor `construct`:

~~~js
construct(props) {
    super(props);
    ...
    this.clickAlertHandler = this.clickAlertHandler.bind(this);
    ...
}
~~~

3. Enlazar el controlador al elemento que queremos controlar:

~~~js
render() {
    return (
        <button onClick={ this.clickAlertHandler } >pulsame</button>
    );
}
~~~

## Controlar un Evento con React - Sin doble enlace

1. Crear un método controlador `handler` dentro de nuestra clase:

~~~js
class MyComponent extends Component {

    ...

    clickAlertHandler(e) {
        // TODO: Controlar el evento clic
    }

    ...

}
~~~

2. Enlazar el controlador al elemento que queremos controlar, añadiendo una expresión `lambda`:

~~~js
render() {
    return (
        <button onClick={ (e) => this.clickAlertHandler(e) } >pulsame</button>
    );
}
~~~

## Conceptos Fundamentales de React

* __Elemento__ - Un fragmento de html

~~~js
const element = <li><input type="checkbox"/> Disponible</li>
~~~

* __Componente__ - Es una clase derivada de `React.Component`

~~~js
import React, { Component } from 'react';

export default class MiComponente extends Component {
    render() {
        // Regresar el elemento visual o null/false
    }
}
~~~

* __Estado Interno__ - Retiene los datos necesarios en el componente

~~~js

export default class MiComponente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Agregar clave-valor para cada dato retenido en el componente
        };
    }

    foo() {
        this.state.setState({
            // Actualizar los valores retenidos
        });
    }
}
~~~

* __Propiedades__ - Son los atributos pasados al componente en su construcción, estos pueden ser simplemente datos pero también funciones (controladores)

~~~js

// MiComponente.render
render() {
    return (
        <div>
            <h1>{this.props.title}</h1>
            <button onClick={ e => this.props.onPulsame() } >pulsame</button>
        </div>
    );
}

// En algún lado
function imprimir() {
    console.log("Hola");
}

<MiComponente title="Saludar" onPulsame={ imprimir }>
~~~

* __Mapeos y Filtros__ - Transformar y reducir datos de arreglos

> host/api/v1/users

~~~json
{
    "data": [
        {
            "displayName": "Arturo B.",
            "photoURL": "http://.../avatar.jpg",
            "birth": "1980-04-05",
        },
        {
            "displayName": "Beto B.",
            "photoURL": "http://.../avatar.jpg",
            "birth": "1980-08-15",
        },
        {
            "displayName": "Maria B.",
            "photoURL": "http://.../avatar.jpg",
            "birth": "1980-12-04",
        },
        {
            "displayName": "Batman B.",
            "photoURL": "http://.../avatar.jpg",
            "birth": "1980-01-21",
        },
        {
            "displayName": "Luis B.",
            "photoURL": "http://.../avatar.jpg",
            "birth": "1980-09-30",
        },
        {
            "displayName": "Paco B.",
            "photoURL": "http://.../avatar.jpg",
            "birth": "1980-06-16",
        }
    ]
}
~~~

> Mapeos

~~~js
const users = ...;

const names = users.map(user => user.displayName);

// names <=> ["Arturo B.", "Beto B.", ..., "Paco B."]

const list_elements = users.map(user => {
    return (
        <li>
            <img src={user.photoURL}>
            <strong>{user.displayName}</strong>
        </li>
    );
});
~~~

> Filtros

~~~js
const b_users = users.filter(user => {
    return user.displayName.match(/^B/i);
});

const happy_users = users.filter(user => {
    const exp = /\d{4}-(\d{2})-\d{2}/
    const m = user.bith.match(exp);
    const current_month = new Date().getMonth();
    const bith_month = Number(m[1]);
    return current_month === bith_month;
});
~~~

## Ciclo de vida en React

<img src="react-lifecycle.png" width="50%" height="50%">

## Conceptos Fundamentales de Flux

> Instalar `Flux` y `Flux/Utils`: `$ npm install flux flux-utils --save`

* __Dispatcher__ - Se encarga de despachar las acciones provenientes de los componentes y enviar dichas acciones a los almacenes para repintar las vistas. Sólo se recomienda un sólo despachador de acciones para toda la aplicación.

> src/Dispacher.js

~~~js
import Dispatcher from 'flux';

export default new Dispatcher();
~~~

* __Store__ - Es el encargado de almacenar/retener datos cada que se emite una acción. Cada que el despachador le envía la notificación que se ha generado una nueva acción el almacén decide si actualizar su estado y cuál debería ser el nuevo estado.

> src/stores/ImageStore.js

~~~js
import Dispatcher from '../Dispatcher';
import ReduceStore from 'flux/utils';

class ImageStore extends ReduceStore {

    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            image: "http://placehold.it/600x800",
            name: "http://placehold.it/600x800",
            date: new Date().toLocaleString()
        };
    }

    reduce(state, action) {
        switch(action.type) {
            case "ON_IMAGE":
                return {
                    image: action.image,
                    name: action.name,
                    date: new Date().toLocaleString()
                };
            default:
                return state;
        }
    }

}

export default new ImageStore();
~~~

* __Actions__ - Se encargan de definir métodos y los métodos deberían propagar las acciones al depachador de acciones.

> src/actions/ImageActions.js

~~~js
import Dispatcher from '../Dispatcher';

class ImageActions {

    onImage(image, name) {
        Dispatcher.dispatch({
            type: "ON_IMAGE",
            image: image,
            name: name
        });
    }

}

export default new ImageActions();

// payload
//{
//    type: "ON_IMAGE",
//    image: image,
//    name: name
//}
~~~

* __Container__ - Es un componente de `react` encargado de cargar todas vistas necesarias (otros componentes) y enlazar los almacenes y las acciones mediante su estado interno. Observa que no exportamos la clase componente, sino el contenedor creado.

> src/containers/ImageContainer.js

~~~js
import React, { Component } from 'react';
import { Container } from 'flux/utils';

import ImageStore from '../stores/ImageStore';
import ImageActions from '../actions/ImageActions';

import ImageLoader from '../views/ImageLoader';
import ImageViewer from '../views/ImageViewer';

class ImageContainer {

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
            <ImageLoader onImage={this.state.onImage} />
            <ImageViewer image={this.state.imageStore.image} 
                name={this.state.imageStore.name} 
                date={this.state.imageStore.date}  />
        );
    }

}

export default Container.create(ImageContainer);
~~~

## Pruebas unitarias con JEST

> Instalar `jest`: `$ npm install -g jest`

> Instalar `jest` en nuestro proyecto: `$ npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer`

> Crear el archivo `.babelrc` en el _root_ del proyecto:

~~~json
{
    "presets": [
        "es2015",
        "react"
    ]
}
~~~

> Configurar el `package.json` (agregar al final):

~~~json
{
    ...
    "babel": {
    "presets": [
      "es2015",
      "react"
    ],
    "plugins": [
      "syntax-class-properties",
      "transform-class-properties"
    ]
  },
  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
      "\\.(css|less)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json"
    ],
    "testPathIgnorePatterns": [
      "/node_modules/"
    ],
    "collectCoverage": true,
    "verbose": true,
    "modulePathIgnorePatterns": [
      "rpmbuild"
    ],
    "unmockedModulePathPatterns": [
      "<rootDir>/node_modules/react/",
      "<rootDir>/node_modules/react-dom/",
      "<rootDir>/node_modules/react-addons-test-utils/",
      "<rootDir>/node_modules/fbjs",
      "<rootDir>/node_modules/core-js"
    ]
  }
}
~~~

> Instalar `$ npm install --save-dev identity-obj-proxy`

> Realizar las pruebas unitarias con `$ jest -u`

## Crear una prueba unitaria personalizada

> Crear un archivo `<MiPrueba>.test.js`

~~~js
import Dispatcher from './Dispatcher';
import LoginStore from './stores/LoginStore';
import LoginActions from './actions/LoginActions';

describe("Descripción de las pruebas unitaria", () => {
    it("descripción de la prueba unitaria 1:", () => {
        const token = LoginStore.getDispatchToken();

        Dispatcher.register(action => {
            if (action.type === "LOGIN_ERROR") {
                expect(action.message).toBe("Acceso incorrecto");
            }
        });

        LoginActions.onLogin("ash123@pokemon.com", "pikachu");
    });
});
~~~