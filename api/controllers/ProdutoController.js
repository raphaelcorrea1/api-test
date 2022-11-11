const database = require('../models');

class ProdutoController {
    static async catchAllProdutos(req, res){
        try {
            const allProdutos = await database.Produtos.findAll({
                attributes: ['id', 'descricao_produto', 'categoria_produto', 'valor_produto', 'validade_produto', 'quantidade_estoque', 'createdAt', 'updatedAt']
            });
            return res.status(200).json(allProdutos);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async catchOneProduto(req, res) {
        const { id } = req.params;
        try {
            const oneProduto = await database.Produtos.findOne( {
                attributes: ['id', 'descricao_produto', 'categoria_produto', 'valor_produto', 'validade_produto', 'quantidade_estoque', 'createdAt', 'updatedAt']
                ,
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
            const newProdutoCreated = await database.Produtos.create(newProduto);
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
            const produtoUpdated = await database.Produtos.findOne({where: {id: Number(id)}});
            return res.status(200).json(produtoUpdated)
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
