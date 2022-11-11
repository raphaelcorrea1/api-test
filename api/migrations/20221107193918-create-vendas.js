'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      quantidade_venda: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      desconto_venda: {
        type: Sequelize.INTEGER
      },
      data_venda: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      valor_venda: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      id_produto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Produtos', key: 'id'}
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
    return queryInterface.dropTable('Vendas');
  }
};