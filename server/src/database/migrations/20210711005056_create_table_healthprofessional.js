
exports.up = knex =>  knex.schema.createTable('healthprofessional', table => {
    table.increments('id')
    table.text('username').notNullable()
    table.date('date').notNullable()
    table.text('email').unique().notNullable()
    table.text('cpf').unique().notNullable()
    table.text('telefone').unique().notNullable()
    table.text('password').notNullable()
    table.enu('sexo', ['masculino', 'feminino']).notNullable()
    table.text('cep').notNullable()
    table.text('logradouro').notNullable()
    table.text('cidade').notNullable()
    table.text('bairro').notNullable()
    table.text('numcasa').notNullable()
    table.enu('profissao', ['medico', 'enfermeiro','tecnicoEnfermagem', 'fonoaudiologia','nutricionista', 'fisioterapeuta']).notNullable()
    table.text('numregistro').notNullable()
    table.text('especialidade')
    table.text('localidadedeatuacao').notNullable()
    table.text('deslocamentomax').notNullable()
    table.text('randomnumber')
   
    

})

exports.down = knex => knex.schema.dropTable('healthprofessional')

