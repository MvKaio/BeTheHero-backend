const express = require("express");
const crypto = require("crypto");
const connection = require('./database/index');

const routes = express.Router();

const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')


routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/profile', profileController.index);
routes.post('/sessions', sessionController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;