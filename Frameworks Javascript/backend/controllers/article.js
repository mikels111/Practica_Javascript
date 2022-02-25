'use strict'

const { query } = require('express');
var validator = require('validator');
var Article = require('../models/article');
var fs = require('fs'); // Para manipular ficheros en los directorios locales
var path = require('path'); // Para manipular ficheros en los directorios locales

var controller = {
    datosCurso: (request, response) => {
        // console.log('hola mundo');

        var params = request.body.hola;
        return response.status(200).send({ // Devolver un json
            curso: 'Frameworks Javascript',
            nombre: 'Mikel',
            apellidos: 'Seara',
            params
        });
    },
    test: (request, response) => {
        return response.status(200).send({
            message: 'Soy la acción de test del controlador de articulos'
        });
    },
    save: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(200).send({
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {

            // Crear el objeto a guardar
            var article = new Article();

            // Asignar valores
            article.title = params.title;
            article.content = params.content;

            if (params.image) {
                article.image = params.image;
            } else {
                article.image = null;
            }

            // Guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article
                });
            });


        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }


    },
    getArticles: (req, res) => {

        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(2);
        }
        // Find
        query.sort('-_id').exec((err, articles) => { //las llaves dentro del método find son para condiciones,por ejemplo que el _id sea mayor que 3. El método sort es para ordenar, en este caso se ordenan con el id descendente

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'error al devolver los articulos'
                });
            }
            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });
        // 


    },
    getArticle: (req, res) => {
        // Recoger el id de la url
        var articleId = req.params.id;

        // Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'Artículo no encontrado'
            });
        }

        // Buscar el artículo
        Article.findById(articleId, (err, article) => {
            if (err || !article) {
                return res.status(500).send({
                    status: 'error al devolver el articulo con id ' + articleId
                });
            }
            // Devolver el artículo
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    },
    update: (req, res) => {
        // Recoger el id de la url
        var articleId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {
            // Find y update

            // https://mongoosejs.com/docs/tutorials/findoneandupdate.html      <--Aquí explica findOneAndUpdate
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'No actualizado'
                    });
                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el artículo'
                    });
                }

                // Actualizado
                return res.status(200).send({
                    status: 'success',
                    message: 'Actualizado',
                    articleUpdated
                });

            });
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

    },
    delete: (req, res) => {
        // recoger id de la url
        var articleId = req.params.id;

        // find y delete
        Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Articulo no eliminado'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No eliminado, no existe el artículo'
                });
            }
            return res.status(200).send({
                status: 'success',
                articleRemoved
            });
        });


    },
    upload: (req, res) => {

        // Configurar el modulo 'connect multiparty/article.js'--> hecho en 'routes/articles.js'

        // Recoger el fichero de la petición
        var file_name = 'Imagen';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: 'Imámgen no seleccionada'
            });
        }

        // Conseguir nombre del fichero
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        // nombre del fichero
        var file_name = file_split[2];

        // Conseguir extensión del fichero
        var split_extension = file_name.split('\.');
        var file_extension = split_extension[1];

        // Comprobar la extensión, solo imagenes, si no es valida borrar el fichero
        if (file_extension != 'png' && file_extension != 'jpg' && file_extension != 'jpeg' && file_extension != 'gif') {
            // Eliminar fichero
            fs.unlink(file_path, (err) => {
                return res.status(500).send({
                    status: "error",
                    message: 'Tipo de archivo no permitido'
                });
            });

        } else {
            // Si todo es valido
            var article_id = req.params.id;
            if (article_id) {
                Article.findOneAndUpdate({ _id: article_id }, { image: file_name }, { new: true }, (err, articleUpdated) => {

                    if (err || !articleUpdated) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'No se ha guardado la imagen'
                        });
                    }
                    return res.status(200).send({
                        status: 'Success',
                        articleUpdated
                    });
                });
                // Buscar el artículo, asignar el nombre de la imagen y actualizarla
                return res.status(200).send({
                    status: 'Success',
                    message: req.files
                });
            } else {
                return res.status(200).send({
                    status: 'Success',
                    image: file_name
                });
            }


        }


    },
    getImage: (req, res) => {
        var file = req.params.img;
        var path_file = './upload/articles/' + file;
        fs.exists(path_file, (exists) => { // Utilizando el módulo 'File System' y el método 'exists'
            if (exists) {
                return res.sendFile(path.resolve(path_file)); // Devolverá la imagen
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: `El fichero ${file} en ${path_file} no existe`
                });
            }
        });
    },
    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search

        // find or
        Article.find({
            '$or': [ // Condición or -->||
                { 'title': { '$regex': searchString, '$options': 'i' } }, // Si el contenido de la variable 'searchString' está incluido en title
                { 'content': { '$regex': searchString, '$options': 'i' } } // Si el contenido de la variable 'searchString' está incluido en content
            ]
        }).sort([
            ['date', 'descending']
        ]).exec((err, articles) => {

            if (err) {
                return res.status(404).send({
                    status: 'error',
                    message: 'error en la búsqueda'
                });
            }

            if (articles.length == 0 || !articles) { // En el curso la condición es--> if(!articles){}
                return res.status(404).send({
                    status: 'Success',
                    message: 'No hay coincidencias con la busqueda'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });

    }
};

module.exports = controller;