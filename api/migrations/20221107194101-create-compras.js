'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade_compra: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      data_compra: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      valor_compra: {
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
    return queryInterface.dropTable('Compras');
  }
};