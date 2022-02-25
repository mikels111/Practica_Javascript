'use strict'
//Este archivo es para las rutas
var express = require('express');

var ArticleController = require('../controllers/article'); //Importar el controlador

var router = express.Router(); //Router de express

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/articles' }); //Middleware para subir archivos

// rutas de prueba
router.get('/test-controlador', ArticleController.test); // Al ejecutar la ruta se devolverá el objeto test que devuelve ArticleController 
router.post('/datos-curso', ArticleController.datosCurso);

// Rutas
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles); // ':last?' es un parametro opcional
router.get('/article/:id', ArticleController.getArticle); // parametro obligatorio
router.put('/update/:id', ArticleController.update); // Actualizar
router.delete('/delete/:id', ArticleController.delete); //Borrar
router.post('/upload-img/:id?', md_upload, ArticleController.upload);
router.get('/get-img/:img', md_upload, ArticleController.getImage);
router.get('/search/:search', md_upload, ArticleController.search);

module.exports = router; // exportar el router para usar la ruta, se importa en app.js