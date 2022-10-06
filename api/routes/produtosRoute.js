const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/estoque/getProdutos', ProdutoController.catchAllProdutos);
router.get('/estoque/getProdutoByID/:id', ProdutoController.catchOneProduto); 
router.post('/estoque/createProduto', ProdutoController.createProduto);
router.put('/estoque/updateProduto/:id', ProdutoController.updateProduto);
router.delete('/estoque/deleteProduto/:id', ProdutoController.deleteProduto);

module.exports = router;