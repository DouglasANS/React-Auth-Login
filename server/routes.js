const express = require('express')
 
const routes = express.Router() 

const ProfessionalController = require('./src/controllers/ProfessionalController')
const CountProfessionalController = require('./src/controllers/CountProfessionalController')
const SendEmailController = require('./src/controllers/SendEmailController')

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

//routes.post('/api/imagema', CountProfessionalController.imagema)



routes.post('/api/sendEmailto/:changeEmail/:randomNumber', SendEmailController.sendEmailto)
routes.put('/api/Mudarsenha/:Email/:codVerification/:newPassword', SendEmailController.ChangePassword)





//routes.put('/api/update', UserController.update)
//routes.delete('/api/delete/:idUsuario', UserController.delete),




module.exports = routes