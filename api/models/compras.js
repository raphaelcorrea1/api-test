'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compras.hasMany(models.Produtos, {
        foreignKey: 'id_produto'
      })
    }
  }
  Compras.init({
    quantidade_compra: DataTypes.INTEGER,
    data_compra: DataTypes.DATEONLY,
    valor_compra: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Compras = sequelize.define('Compras', {
//     quantidade_compra: DataTypes.INTEGER,
//     data_compra: DataTypes.DATEONLY,
//     valor_compra: DataTypes.FLOAT
//   }, {});
//   Compras.associate = function(models) {
//     // associations can be defined here
//     Compras.hasMany(models.Produtos, {
//       foreignKey: 'id_produto'
//     })
//   };
//   return Compras;
// };