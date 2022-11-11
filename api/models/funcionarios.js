'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funcionarios.init({
    cpf_funcionario: DataTypes.BIGINT,
    email_funcionario: DataTypes.STRING,
    nome_funcionario: DataTypes.STRING,
    cargo_funcionario: DataTypes.STRING,
    salario_funcionario: DataTypes.FLOAT,
    escala_funcionario: DataTypes.STRING,
    comissao_funcionario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};



// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Funcionarios = sequelize.define('Funcionarios', {
//     cpf_funcionario: DataTypes.BIGINT,
//     email_funcionario: DataTypes.STRING,
//     nome_funcionario: DataTypes.STRING,
//     cargo_funcionario: DataTypes.STRING,
//     salario_funcionario: DataTypes.FLOAT,
//     escala_funcionario: DataTypes.STRING,
//     comissao_funcionario: DataTypes.FLOAT
//   }, {});
//   Funcionarios.associate = function(models) {
//     // associations can be defined here
//   };
//   return Funcionarios;
// };