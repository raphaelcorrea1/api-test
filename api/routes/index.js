const bodyParser = require('body-parser');
const produtos = require('./produtosRoute');
const funcionarios = require('./funcionariosRoute');
const compras = require('./comprasRoute');
const vendas = require('./vendasRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(produtos);
    app.use(funcionarios);
    app.use(compras);
    app.use(vendas);
}