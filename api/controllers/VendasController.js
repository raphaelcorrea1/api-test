const database = require('../models');

class VendaController {
    static async catchAllVendas(req, res){
        try {
            const allVendas = await database.Vendas.findAll();
            return res.status(200).json(allVendas);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async catchOneVenda(req, res) {
        const { id } = req.params;
        try {
            const oneVenda = await database.Vendas.findOne( {
                where: { 
                    id: Number(id) 
                }
            });
            return res.status(200).json(oneVenda);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createVenda(req, res) {
        const newVenda = req.body;
        try {
            const newVendaCreated = await database.Vendas.create(newVenda);
            return res.status(200).json(newVendaCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //update Vendas
    static async updateVenda(req, res) {
        const { id } = req.params;
        const newInfos = req.body;
        try {
            await database.Vendas.update(newInfos, {where: {id: Number(id)}});
            const VendaUpdated = await database.Vendas.findOne({where: {id: Number(id)}});
            return res.status(200).json(VendaUpdated)
        } catch (error) { 
            return res.status(500).json(error.message);
        }
             
    }

    //delete Vendas
    static async deleteVenda(req, res) {
        const { id } = req.params;
        try {
            await database.Vendas.destroy({where: {id: Number(id)}});
            return res.status(200).json({ message: `ID ${id} deletado com sucesso!` });
        } catch(error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = VendaController;
