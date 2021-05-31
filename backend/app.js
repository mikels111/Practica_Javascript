'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser'); //Para recibir las peticiones y convertirlas a un objeto json
var app = express();

// Ejecutar express(http)

// cargar ficheros rutas
var articleRoutes = require('./routes/article'); //importar el objeto routes que devuelve routes/article.js

// Middlewares(se ejecutan antes de cargar una ruta o url)
app.use(bodyParser.urlencoded({ extended: false })); // Cargar bodyParser
app.use(bodyParser.json()); // Para convertir la peticion a json

// CORS(para permitir peticiones del frontend)


// Añadir prefijos a las rutas
app.use('/api', articleRoutes); // "/api" es para que en la ruta tengamos que poner api

// ruta o metodo de prueba para la api rest
// app.get('/probando', (request, response) => {////En vez de get también se pueden utilizar los otros metodos http
//     // console.log('hola mundo');

//     var params = request.body.hola;
//     return response.status(200).send({ // Devolver un json
//         curso: 'Frameworks Javascript',
//         nombre: 'Mikel',
//         apellidos: 'Seara',
//         params
//     });
//     // return response.status(200).send(`
//     //     <ul>
//     //         <li>Angular</li>
//     //         <li>Node.js</li>
//     //         <li>React</li>
//     //     </ul>
//     // `); //Devolver el estado, 200 es correcto
// });

// Exportar modulo (fichero actual)
module.exports = app;