'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Produtos', [
      {
        descricao_produto: "Detergente Ypê Clear 500Ml",
        categoria_produto: "Limpeza",
        valor_produto: 2.99,
        validade_produto: '2023/08/20',
        quantidade_estoque: 100,
        limite_estoque: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao_produto: "Refrigerante Framboesa Cini Pet 2L ",
        categoria_produto: "Bebidas",
        valor_produto: 5.99,
        validade_produto: '2022/11/15',
        quantidade_estoque: 100,
        limite_estoque: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao_produto: "Batata Branca Kg ",
        categoria_produto: "Feira",
        valor_produto: 5.99,
        validade_produto: '2022/12/10',
        quantidade_estoque: 100,
        limite_estoque: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});

  }
};
