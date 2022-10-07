'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    descricao_produto: DataTypes.STRING,
    categoria_produto: DataTypes.STRING,
    valor_produto: DataTypes.FLOAT,
    validade_produto: DataTypes.DATEONLY,
    quantidade_estoque: DataTypes.INTEGER,
    limite_estoque: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};