const database = require('../models');

class CompraController {
    static async catchAllCompras(req, res){
        try {
            const allCompras = await database.Compras.findAll({
                attributes: ['id_produto', 'descricao_produto', 'quantidade_venda', 'valor_produto', 'data_venda', 'createdAt', 'updatedAt'],
                include: [{
                    model: database.parental,
                    required: false,
                    attributes: ['id_produto', 'descricao_produto', 'valor_produto']
                }]
            });
            return res.status(200).json(allCompras);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async catchOneCompra(req, res) {
        const { id } = req.params;
        try {
            const oneCompra = await database.Compras.findOne( {
                where: { 
                    id: Number(id) 
                }
            });
            return res.status(200).json(oneCompra);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createCompra(req, res) {
        const newCompra = req.body;
        try {
            const newCompraCreated = await database.Compras.create(newCompra);
            return res.status(200).json(newCompraCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //update Compras
    static async updateCompra(req, res) {
        const { id } = req.params;
        const newInfos = req.body;
        try {
            await database.Compras.update(newInfos, {where: {id: Number(id)}});
            const compraUpdated = await database.Compras.findOne({where: {id: Number(id)}});
            return res.status(200).json(compraUpdated)
        } catch (error) { 
            return res.status(500).json(error.message);
        }
             
    }

    //delete Compras
    static async deleteCompra(req, res) {
        const { id } = req.params;
        try {
            await database.Compras.destroy({where: {id: Number(id)}});
            return res.status(200).json({ message: `ID ${id} deletado com sucesso!` });
        } catch(error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = CompraController;
