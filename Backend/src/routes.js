const {Router} = require('express');
const LeadController = require('./controllers/LeadController')
const UserController = require('./controllers/UserController')

const routes = Router();

routes.get('/api/leads' , LeadController.index);
routes.get('/api/lead/:id' , LeadController.show);
routes.post('/api/lead' , LeadController.store);
routes.put('/api/lead/:id',LeadController.update)
routes.delete('/api/lead/:id',LeadController.destroy);


///user 
routes.get('/users' , UserController.index);

routes.post('/register' , UserController.store);


routes.delete('/user/:id' , UserController.destroy);

module.exports = routes;