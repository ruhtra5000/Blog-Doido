const mongoose = require('mongoose')
require('../models/Postagem')
const Postagem = mongoose.model('postagens')

class pagPrincCommand {
    static execute(req, res){
        Postagem.find().populate('categoria').sort({data: 'desc'}).lean().then((postagens) => {
            res.render('index', {postagens: postagens})
        }).catch((err) => {
            req.flash('err', 'Houve um erro ao carregar as postagens. Tente novamente.')
            res.redirect('/frontController/categorias')
        }) 
    }
} 

module.exports = pagPrincCommand