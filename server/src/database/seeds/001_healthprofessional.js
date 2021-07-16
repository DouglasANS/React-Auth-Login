
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('healthprofessional').del()
    .then(function () {
      // Inserts seed entries
      return knex('healthprofessional').insert([
        { username: 'douglas', 
          date: 19960119,
          email: 'douglas@hotmail.com',
          cpf: '123456789',
          telefone: '86750496',
          password: '123456',
          sexo: 'masculino',
          cep: '53430221',
          logradouro: 'manoel herculano',
          cidade: 'paulista',
          bairro: 'janga',
          numcasa: '625',
          profissao: 'medico',
          numregistro: '53435',     
        },
      ]);
    });
};
