const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController');

const router = Router();

router.get('/funcionario/getFuncionarios', FuncionarioController.catchAllFuncionarios);
router.get('/funcionario/getFuncionarioByID/:id', FuncionarioController.catchOneFuncionario); 
router.post('/funcionario/createFuncionario', FuncionarioController.createFuncionario);
router.put('/funcionario/updateFuncionario/:id', FuncionarioController.updateFuncionario);
router.delete('/funcionario/deleteFuncionario/:id', FuncionarioController.deleteFuncionario);

module.exports = router;