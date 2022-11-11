const database = require('../models');

class FuncionarioController {
    static async catchAllFuncionarios(req, res){
        try {
            const allFuncionarios = await database.Funcionarios.findAll();
            return res.status(200).json(allFuncionarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async catchOneFuncionario(req, res) {
        const { id } = req.params;
        try {
            const oneFuncionario = await database.Funcionarios.findOne( {
                where: { 
                    id: Number(id) 
                }
            });
            return res.status(200).json(oneFuncionario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createFuncionario(req, res) {
        const newFuncionario = req.body;
        try {
            const newFuncionarioCreated = await database.Funcionarios.create(newFuncionario);
            return res.status(200).json(newFuncionarioCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //update Funcionarios
    static async updateFuncionario(req, res) {
        const { id } = req.params;
        const newInfos = req.body;
        try {
            await database.Funcionarios.update(newInfos, {where: {id: Number(id)}});
            const funcionarioUpdated = await database.Funcionarios.findOne({where: {id: Number(id)}});
            return res.status(200).json(funcionarioUpdated)
        } catch (error) { 
            return res.status(500).json(error.message);
        }
             
    }

    //delete Funcionarios
    static async deleteFuncionario(req, res) {
        const { id } = req.params;
        try {
            await database.Funcionarios.destroy({where: {id: Number(id)}});
            return res.status(200).json({ message: `ID ${id} deletado com sucesso!` });
        } catch(error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = FuncionarioController;
