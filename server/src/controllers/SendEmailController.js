const nodemailer = require('nodemailer')
const knex = require('../database')  

module.exports = {
    
 async sendEmailto(req, res) {
    try {

    const {changeEmail} = req.params
    const {randomNumber} = req.params

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, 
        secure: false,
        auth: {
            user: 'suportdesenvolvedoremail@gmail.com',
            pass: 'a1b2c3d4e5#'
        }
    })
    
        const mailSend = await transporter.sendMail({
            from: "Douglas Agostinho <suportdesenvolvedoremail@gmail.com>",
            to: changeEmail,
            subject: "Projeto salvus requisição de uma nova senha",
            text: "Esse é seu codigo para mudar a senha: " + randomNumber ,
        })

        await knex('healthprofessional')
        .where('email','=' , changeEmail )
        .update({ randomnumber: randomNumber })
    
        console.log(mailSend)
        

        return res.json(mailSend)
    
    } catch (error) {
        next(error)
    }
        
    },
  

}