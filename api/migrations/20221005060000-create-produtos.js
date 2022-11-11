'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao_produto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoria_produto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      valor_produto: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      validade_produto: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      quantidade_estoque: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};