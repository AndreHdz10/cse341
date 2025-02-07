const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.someonesName);
routes.get('/anothername', myController.anotherPersonName);


module.exports = routes;