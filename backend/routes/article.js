'use strict'
//Este archivo es para rutas
var express = require('express');

var ArticleController = require('../controllers/article'); //Importar el controlador

var router = express.Router(); //Router de express
// rutas de prueba
router.get('/test-controlador', ArticleController.test); // Al ejecutar la ruta se devolverá el objeto test que devuelve ArticleController 
router.post('/datos-curso', ArticleController.datosCurso);

// Rutas
router.post('/save', ArticleController.save);
module.exports = router; // exportar el router para usar la ruta, se importa en app.js