const http = require("http");
const express = require("express");

const server = express();

server.get("/", function (req, res) {
    res.json({
        nombre: "Ana",
        edad: 25,
        email: "ana@correo.com"
    });
});

server.get("/hola", (req, res) => {
    res.status(400).send("hola mundo :D");
});

http.createServer(server).listen(3000);