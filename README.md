# React Essentials

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
