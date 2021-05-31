'use strict'

var validator = require('validator');
var Article = require('../models/article');

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

            // Asignar valores

            // Guardar el articulo

            // Devolver una respuesta
            return res.status(200).send({
                message: 'Soy la acción de save del controlador de articulos',
                article: params
            });
        } else {
            return res.status(200).send({
                message: 'Los datos no son validos'
            });
        }


    }
};

module.exports = controller;