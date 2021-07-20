const knex = require('../database')  
const nodemailer = require('nodemailer')

module.exports = {
    async index(req, res) { 

        const results = await knex.select('*').from('healthprofessional')
        return res.json(results)
        
    },
    async currentUser(req, res) { 

        const {Email} = req.body

        console.log('aqui: ', Email)

        const results = await knex.select('*').from('healthprofessional').where('email', Email)
        
        return res.json(results)
        
    },
    async create(req, res, next){
        try {

            const { userUsername } = req.body
            const { userDate } = req.body
            const { userEmail } = req.body
            const { userCpf } = req.body
            const { userTelefone } = req.body
            const { userPassword } = req.body
            const { userSexo } = req.body
            const { userCep } = req.body
            const { userLogradouro } = req.body
            const { userCidade } = req.body
            const { userBairro } = req.body
            const { userNumCasa } = req.body
            const { userProfissao } = req.body
            const { userNumRegistro } = req.body
            const { userEspecialidade } = req.body
            const { userLocalidadedeatuacao } = req.body
            const { userDeslocamentomax } = req.body

            console.log('name: ' + userUsername +' data : ' + userDate + ' sex : ' + userSexo + " med : " + userProfissao)
        
        
            await knex('healthprofessional').insert(
                {   username: userUsername, 
                    date: userDate, 
                    email: userEmail, 
                    cpf: userCpf, 
                    telefone: userTelefone, 
                    password: userPassword, 
                    sexo: userSexo,
                    cep: userCep, 
                    logradouro: userLogradouro, 
                    cidade: userCidade, 
                    bairro: userBairro, 
                    numcasa: userNumCasa, 
                    profissao: userProfissao, 
                    numregistro: userNumRegistro,
                    especialidade:userEspecialidade,
                    localidadedeatuacao:userLocalidadedeatuacao,
                    deslocamentomax: userDeslocamentomax,
                }
                )

            return console.log("done")//res.status(200).send()
        } catch (error) {
            next(error)
        }    
    },
    async update(req, res, next){
        try {

            
            const { userid } = req.body
            const { userEmail } = req.body

            console.log(userid)
            console.log(userEmail)
        
        
            

            return res.send()

            
        } catch (error) {
            next(error)
        }

    },
    async delete(req, res, next){
        try{
            const { idUsuario } = req.params
            console.log(idUsuario)

            await knex('healthprofessional')
            .where('id', idUsuario).del()
            
            

            return res.send()

        }catch (error){
            next(error)
        }
    },
    async checkLogin(req, res, next){
        try{
            
            const { userEmail } = req.body
            const { userPassword } = req.body

            var result = await knex('healthprofessional').where('email', userEmail).where('password', userPassword)
            
           
            if(result == ""){
                return res.send({message: 'user not found'})
            }else{
                return res.send(result)
               
            }
                 
            console.log(userEmail, userPassword)
            
        } catch (error) {
            next(error)
        }
    },
    async checkEmail(req, res, next){
        try{
            const { userEmail } = req.body

            var result = await knex('healthprofessional').where('email', userEmail)
            
           
            if(result == ""){
                return res.send({message: 'user not found'})
            }else{
                return res.send(result)
               
            }
                 
            console.log(userEmail, userPassword)
            
        } catch (error) {
            next(error)
        }
    },
    async SelectUserLogin(req, res) { 

        const {currentEmail} = req.params

        const results = await knex.select('*').from('healthprofessional').where('email', currentEmail)
        
        return res.json(results)
        
    },
 

}