const { Router } = require('express');
const ComprasController = require('../controllers/ComprasController.js');

const router = Router();

router.get('/compra/getCompras', ComprasController.catchAllCompras);
router.get('/compra/getCompraByID/:id', ComprasController.catchOneCompra); 
router.post('/compra/createCompra', ComprasController.createCompra);
router.put('/compra/updateCompra/:id', ComprasController.updateCompra);
router.delete('/compra/deleteCompra/:id', ComprasController.deleteCompra);

module.exports = router;