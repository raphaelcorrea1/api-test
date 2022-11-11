'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendas.hasMany(models.Produtos, {
        foreignKey: "id_produto"
      })
    }
  }
  Vendas.init({
    quantidade_venda: DataTypes.INTEGER,
    desconto_venda: DataTypes.INTEGER,
    data_venda: DataTypes.DATEONLY,
    valor_venda: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Vendas',
  });
  return Vendas;
};






// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Vendas = sequelize.define('Vendas', {
//     quantidade_venda: DataTypes.INTEGER,
//     desconto_venda: DataTypes.INTEGER,
//     data_venda: DataTypes.DATEONLY,
//     valor_venda: DataTypes.FLOAT
//   }, {});
//   Vendas.associate = function(models) {
//     // associations can be defined here
//     Vendas.hasMany(models.Produtos, {
//       foreignKey: "id_produto"
//     })

//   };
//   return Vendas;
// };