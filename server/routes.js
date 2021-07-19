const express = require('express')
 
const routes = express.Router() 

const ProfessionalController = require('./src/controllers/ProfessionalController')
const UserController = require('./src/controllers/AdmController')
const CountProfessionalController = require('./src/controllers/CountProfessionalController')

routes.get('/api/get', ProfessionalController.index)
routes.post('/api/insert', ProfessionalController.create)
routes.post('/api/login', ProfessionalController.checkLogin)
routes.post('/api/checkEmail', ProfessionalController.checkEmail)
routes.get('/api/SelectUserLogin/:currentEmail', ProfessionalController.SelectUserLogin)

// ---------  Count  ---------
routes.get('/api/countAll', CountProfessionalController.allGet)
routes.get('/api/countMedico', CountProfessionalController.countMedico)
routes.get('/api/countEnfermeiro', CountProfessionalController.countEnfermeiro)
routes.get('/api/countTecnicoEnfermagem', CountProfessionalController.countTecnicoEnfermagem)
routes.get('/api/countFonoaudiologia', CountProfessionalController.countFonoaudiologia)

routes.post('/api/imagema', CountProfessionalController.imagema)




routes.get('/api/adm/get', UserController.index)
routes.post('/api/adm/insert', UserController.create)


//routes.put('/api/update', UserController.update)
//routes.delete('/api/delete/:idUsuario', UserController.delete),




module.exports = routes