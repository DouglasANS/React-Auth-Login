const express = require('express')
const routes = express.Router() 

// ---------  Require  ---------
const ProfessionalController = require('./src/controllers/ProfessionalController')
const CountProfessionalController = require('./src/controllers/CountProfessionalController')
const SendEmailController = require('./src/controllers/SendEmailController')

// ---------  CRUD Professional  ---------
routes.get('/api/get', ProfessionalController.index)
routes.post('/api/insert', ProfessionalController.create)
routes.post('/api/login', ProfessionalController.checkLogin)
routes.post('/api/checkEmail', ProfessionalController.checkEmail)
routes.get('/api/SelectUserLogin/:currentEmail', ProfessionalController.SelectUserLogin)
routes.put('/api/update/:id/:localidadedeatuacao/:deslocamentomax/:password', ProfessionalController.update)
routes.delete('/api/delete/:idUsuario', ProfessionalController.delete),

// ---------  Count  ---------
routes.get('/api/countAll', CountProfessionalController.allGet)
routes.get('/api/countMedico', CountProfessionalController.countMedico)
routes.get('/api/countEnfermeiro', CountProfessionalController.countEnfermeiro)
routes.get('/api/countTecnicoEnfermagem', CountProfessionalController.countTecnicoEnfermagem)
routes.get('/api/countFonoaudiologia', CountProfessionalController.countFonoaudiologia)
routes.get('/api/countNutricionista', CountProfessionalController.countNutricionista)
routes.get('/api/countFisioterapeuta', CountProfessionalController.countFisioterapeuta)

// ---------  Enviar Email  ---------
routes.post('/api/sendEmailto/:changeEmail/:randomNumber', SendEmailController.sendEmailto)
routes.put('/api/Mudarsenha/:Email/:codVerification/:newPassword', SendEmailController.ChangePassword)


module.exports = routes