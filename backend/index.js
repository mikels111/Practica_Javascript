'use strict'

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pruebas1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('la conexión a la base de datos realizada con exito');
    });