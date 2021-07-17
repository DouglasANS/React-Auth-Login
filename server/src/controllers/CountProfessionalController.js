const knex = require('../database')  

module.exports = {
    async allGet(req, res) { 

        const results = await knex.select('*').from('healthprofessional')
        return res.json(results)
        
    },
    async countMedico(req, res) { 

        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})
        .where('profissao', 'medico')
        
        return res.json(results)
    },
    async countEnfermeiro(req, res) { 
    
        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})
        .where('profissao', 'enfermeiro')

        return res.json(results)
    },
    async countTecnicoEnfermagem(req, res) { 

        
        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})
        .where('profissao', 'tecnicoEnfermagem')

        return res.json(results)
    },
    async countFonoaudiologia(req, res) { 

        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})
        .where('profissao', 'fonoaudiologia')

        return res.json(results)
    },

    async imagema(req, res) { 
        try {

        const { Imga } = req.body
        console.log('asd',Imga)
        await knex('admuser').insert(
            {   
                user: Imga, 
            }
            )

        return console.log("done")//res.status(200).send()
    } catch (error) {
        next(error)
    }    
},
    //SELECT count(*) FROM produtos      
}