'use strict';

const http = require('http');
const port = 5001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hola Mundo Prueba\n');
});

server.listen(port, ()=>{
    console.log("Bienvenido a la página web de Jhoan Hernández"+port);
});