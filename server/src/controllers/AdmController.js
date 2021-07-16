const knex = require('../database')  

module.exports = {
    async index(req, res) { 

        const results = await knex.select('*').from('admuser')
        
        return res.json(results)
    },
    async create(req, res, next){
        try {
            const { userUsername } = req.body
            const { userEmail } = req.body
            const { userPassword } = req.body

            console.log('name: ' + userUsername +' email : ' + userEmail + ' password : ' + userPassword )
        
            
            await knex('admuser').insert(
                {   user: userUsername, 
                    email: userEmail, 
                    password: userPassword, 
                }
                )

            return res.status(200).send()
        } catch (error) {
            next(error)
        }    
    },
    
}    
