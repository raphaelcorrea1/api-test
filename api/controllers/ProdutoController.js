const database = require('../models');

class ProdutoController {
    static async catchAllProdutos(req, res){
        try {
            const allProdutos = await database.Produtos.findAll();
            return res.status(200).json(allProdutos);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async catchOneProduto(req, res) {
        const { id } = req.params;
        try {
            const oneProduto = await database.Produtos.findOne( {
                where: { 
                    id: Number(id) 
                }
            });
            return res.status(200).json(oneProduto);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createProduto(req, res) {
        const newProduto = req.body;
        try {
            const newProdutoCreated = await database.Produtos.create(newProdutos);
            return res.status(200).json(newProdutoCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //update Produtos
    static async updateProduto(req, res) {
        const { id } = req.params;
        const newInfos = req.body;
        try {
            await database.Produtos.update(newInfos, {where: {id: Number(id)}});
            const ProdutoUpdated = await database.Produtos.findOne({where: {id: Number(id)}});
            return res.status(200).json(ProdutoUpdated)
        } catch (error) { 
            return res.status(500).json(error.message);
        }
             
    }

    //delete Produtos
    static async deleteProduto(req, res) {
        const { id } = req.params;
        try {
            await database.Produtos.destroy({where: {id: Number(id)}});
            return res.status(200).json({ message: `ID ${id} deletado com sucesso!` });
        } catch(error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = ProdutoController;