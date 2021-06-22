const mongoose = require('mongoose')
require('../../../models/Postagem')
const Postagem = mongoose.model('postagens')

class criarPostagemProcessCommand{
    static execute(req, res) {
        var novaPostagem = {
            titulo: req.body.titulo,
            resumo: req.body.resumo,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria
        }
    
        new Postagem(novaPostagem).save().then(() => {
            req.flash('suc', 'Postagem criada!')
            res.redirect('/frontController/adminPostagens')
        }).catch((err) => {
            req.flash('err', 'Houve um erro interno. Tente novamente.')
            res.redirect('/frontController/adminPostagens')
        })
    }
}

module.exports = criarPostagemProcessCommand