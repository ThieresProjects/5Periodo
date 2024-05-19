const express = require('express');
const controllerUsuario = require('./controllers/Usuario.controller');

const routes = express.Router();

// Usuario
routes.get('/usuario/list',controllerUsuario.List);
routes.get('/usuario/get',controllerUsuario.GetOne);
routes.post('/usuario/create',controllerUsuario.Create);
routes.put('/usuario/update',controllerUsuario.Update);
routes.delete('/usuario/delete',controllerUsuario.Delete);

module.exports = routes;