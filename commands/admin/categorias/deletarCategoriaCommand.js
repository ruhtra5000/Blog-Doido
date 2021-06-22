const mongoose = require('mongoose')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class deletarCategoriaCommand{
    static execute(req, res) {
        Categoria.deleteOne({_id: req.body.id}).then(() => {
            req.flash('suc', 'Categoria deletada!')
            res.redirect('/frontController/adminCategorias')
        }).catch((err) => {
            req.flash('err', 'Houve um erro ao deletar a categoria. Tente novamente.')
            res.redirect('/frontController/adminCategorias')
        })
    }
}

module.exports = deletarCategoriaCommand