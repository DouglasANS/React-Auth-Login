const knex = require('../database')  

module.exports = {
    async allGet(req, res) { 

        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})

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
    async countNutricionista(req, res) { 

        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})
        .where('profissao', 'nutricionista')

        return res.json(results)
    },
    async countFisioterapeuta(req, res) { 

        const results = await knex('healthprofessional')
        .count('profissao' , {as: 'a'})
        .where('profissao', 'fisioterapeuta')

        return res.json(results)
    },

    //SELECT count(*) FROM produtos      
}