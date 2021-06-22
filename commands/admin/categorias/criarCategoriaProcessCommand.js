const mongoose = require('mongoose')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class criarCategoriaProcessCommand {
    static execute(req, res){
        var novaCategoria = {
            nome: req.body.nome,
            link: req.body.link
        }
    
        new Categoria(novaCategoria).save().then(() => {
            req.flash('suc', 'Categoria criada com sucesso!')
            res.redirect('/frontController/adminCategorias')
        }).catch((err) => {
            req.flash('err', 'Houve um erro na criação da categoria. Tente novamente.')
            res.redirect('/frontController/adminCategorias')
        })
    }
}

module.exports = criarCategoriaProcessCommand