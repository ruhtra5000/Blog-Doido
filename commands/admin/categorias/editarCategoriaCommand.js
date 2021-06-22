const mongoose = require('mongoose')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class editarCategoriaCommand{
    static execute(req, res) {
        Categoria.findOne({_id: req.query.id}).lean().then((categoria) => {
            if(categoria){
                res.render('admin/editCategoria', {categoria: categoria})
            }
        }).catch((err) => {
            req.flash('err', 'Houve um erro. Tente novamente.')
            res.redirect('/frontController/adminCategorias')
        })
    }
}

module.exports = editarCategoriaCommand