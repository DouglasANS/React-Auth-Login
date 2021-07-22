const nodemailer = require('nodemailer')
const knex = require('../database')

module.exports = {

    async sendEmailto(req, res) {
        try {
            const { changeEmail } = req.params
            const { randomNumber } = req.params

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'suportdesenvolvedoremail@gmail.com',
                    pass: 'a1b2c3d4e5#'
                }
            })

            const result = await knex('healthprofessional')
                .where('email', changeEmail)

            if (result == "") {
                return res.send({ message: 'user not found' })
            } else {
                const mailSend = await transporter.sendMail({
                    from: "Douglas Agostinho <suportdesenvolvedoremail@gmail.com>",
                    to: changeEmail,
                    subject: "Projeto salvus requisição de uma nova senha",
                    text: "Esse é o seu código para mudar a senha: " + randomNumber,
                })

                await knex('healthprofessional')
                    .where('email', '=', changeEmail)
                    .update({ randomnumber: randomNumber })

                return res.json(mailSend)
            }
        } catch (error) {
            next(error)
        }
    },
    async ChangePassword(req, res) {
        try {
            const { Email } = req.params
            const { codVerification } = req.params
            const { newPassword } = req.params

            const result = await knex('healthprofessional')
            .where('email', Email)
            .where('randomnumber', '=', codVerification)

            if (result == "") {
                return res.send({ message: 'user not found' })
            } else {
                const results = await knex('healthprofessional')
                    .where('email', '=', Email)
                    .where('randomnumber', '=', codVerification)
                    .update({ password: newPassword })

                return res.json(results)
            }
        } catch (error) {
            next(error)
        }
    },
}