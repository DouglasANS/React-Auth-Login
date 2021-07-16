const express = require('express')
 
const routes = express.Router() 

const ProfessionalController = require('./src/controllers/ProfessionalController')
const UserController = require('./src/controllers/AdmController')
routes.get('/api/get', ProfessionalController.index)
routes.post('/api/insert', ProfessionalController.create)
routes.post('/api/login', ProfessionalController.checkLogin)

routes.get('/api/adm/get', UserController.index)
routes.post('/api/adm/insert', UserController.create)


//routes.put('/api/update', UserController.update)
//routes.delete('/api/delete/:idUsuario', UserController.delete),




module.exports = routes