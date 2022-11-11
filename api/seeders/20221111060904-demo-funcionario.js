'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Funcionarios', [{
      id: 1,
      cpf_funcionario: 123456789,
      email_funcionario: 'raphael@muffatinho.com',
      nome_funcionario: 'Raphael',
      cargo_funcionario: 'Developer',
      salario_funcionario: '50000',
      escala_funcionario: '6x3',
      comissao_funcionario: '60',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('People', null, {});
    
  }
};
