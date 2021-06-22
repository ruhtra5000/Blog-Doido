const mongoose = require('mongoose')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class editarCategoriaProcessCommand{
    static execute(req, res) {
        Categoria.updateOne({_id: req.body.id}, {
            nome: req.body.nome,
            link: req.body.link
        }).then(() => {
            req.flash('suc', 'Dados editados!')
            res.redirect('/frontController/adminCategorias')
        }).catch((err) => {
            req.flash('err', 'Houve um erro ao editar os dados. Tente novamente.')
            res.redirect('/frontController/adminCategorias')
        })
    }
}

module.exports = editarCategoriaProcessCommand