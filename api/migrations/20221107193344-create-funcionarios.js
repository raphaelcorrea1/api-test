'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cpf_funcionario: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      email_funcionario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome_funcionario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cargo_funcionario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      salario_funcionario: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      escala_funcionario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comissao_funcionario: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Funcionarios');
  }
};