const mongoose = require('mongoose')
require('../models/Postagem')
const Postagem = mongoose.model('postagens')

class leituraCommand {
    static execute(req, res){
        Postagem.findOne({_id: req.query.id}).lean().then((postagem) => {
            res.render('postagens/postagemLeitura', {postagem: postagem})
        }).catch((err) => {
            req.flash('err', 'Houve um erro ao carregar a postagem. Tente novamente.')
            res.redirect('/frontController/pagPrinc')
        })
    }
}

module.exports = leituraCommand