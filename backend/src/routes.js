const express = require('express');

const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
module.exports = routes;
