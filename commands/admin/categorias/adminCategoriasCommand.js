const mongoose = require('mongoose')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class adminCategoriasCommand {
    static execute(req, res){
        Categoria.find().lean().then((categorias) => {
            res.render('admin/categorias', {categorias: categorias})
        }).catch((err) => {
            req.flash('err', 'Houve um erro interno. Tente novamente.')
            res.redirect('/frontController/admin')
        })  
    }
}

module.exports = adminCategoriasCommand