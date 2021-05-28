'use strict' //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode

var mongoose = require('mongoose'); //Para cargar un modulo de node.js
var app = require('./app'); // cargar el modulo creado llamado app
var port = 3900; //el puerto de la app


mongoose.set('useFindAndModify', false); //Para evitar fallos con mongodb
mongoose.Promise = global.Promise; //Para evitar fallos con mongodb

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true, useUnifiedTopology: true }) //useNewUrlParser --> para utilizar nueva sintaxis de mongoose
    .then(() => {
        console.log('la conexión a la base de datos realizada correctamente');
        // Crear servidor y escuchar peticiones http
        app.listen(port, () => {
            console.log('Servidor creado correctamente y ejecución en: http://localhost:' + port);
        });
    });