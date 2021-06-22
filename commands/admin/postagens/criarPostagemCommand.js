const mongoose = require('mongoose')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class criarPostagemCommand {
    static execute(req, res) {
        Categoria.find().lean().then((categorias) => {
            res.render('admin/novaPostagem', {categorias: categorias})
        }).catch((err) => {
            req.flash('err', 'Houve um erro interno. Tente novamente.')
            res.redirect('/frontController/adminPostagens')
        })
    }
}

module.exports = criarPostagemCommand