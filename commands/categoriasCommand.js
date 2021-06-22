const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')

class categoriasCommand {
    static execute(req, res){
        Categoria.find().lean().then((categorias) => {
            res.render('categorias/index', {categorias: categorias}) 
         }).catch((err) => {
             req.flash('err', 'Houve um erro ao carregar as categorias. Tente novamente.')
             res.redirect('/frontController/pagPrinc')
         }) 
    }
}

module.exports = categoriasCommand