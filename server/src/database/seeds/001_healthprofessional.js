
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('healthprofessional').del()
    .then(function () {
      // Inserts seed entries
      return knex('healthprofessional').insert([
        { username: 'douglas', 
          date: 19960119,
          email: 'douglasans@hotmail.com',
          cpf: '123456789',
          telefone: '86750496',
          password: '123456',
          sexo: 'masculino',
          cep: '53435330',
          logradouro: 'manoel herculano pessoa',
          cidade: 'paulista',
          bairro: 'janga',
          numcasa: '625',
          profissao: 'medico',
          numregistro: '53435',
          especialidade: 'Pediatria',
          localidadedeatuacao: "Boa viagem",
          deslocamentomax: "50"
        },
      ]);
    });
};
