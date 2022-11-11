const { Router } = require('express');
const VendaController = require('../controllers/VendasController.js');


const router = Router();

router.get('/venda/getVendas', VendaController.catchAllVendas);
router.get('/venda/getVendaByID/:id', VendaController.catchOneVenda); 
router.post('/venda/createVenda', VendaController.createVenda);
router.delete('/venda/deleteVenda/:id', VendaController.deleteVenda);

module.exports = router;