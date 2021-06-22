const mongoose = require('mongoose')
require('../models/Postagem')
const Postagem = mongoose.model('postagens')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')

class categoriaBuscaCommand {
    static execute(req, res) {
        Categoria.findOne({link: req.query.link}).lean().then((categoria) => {
            if(categoria){
                Postagem.find({categoria: categoria._id}).populate('categoria').sort({data: 'desc'}).lean().then((postagens) => {
                    res.render('categorias/busca', {categoria: categoria, postagens: postagens})
                }).catch((err) => {
                    req.flash('err', 'Houve um erro ao carregar as postagens relacionadas à essa categoria. Tente novamente.')
                    res.redirect('/frontController/categorias')
                })
            }
        }).catch((err) => {
            req.flash('err', 'Houve um erro interno. Tente novamente.')
            res.redirect('/frontController/categorias')
        })
    }
}

module.exports = categoriaBuscaCommand