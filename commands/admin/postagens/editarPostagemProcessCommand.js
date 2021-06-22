const mongoose = require('mongoose')
require('../../../models/Postagem')
const Postagem = mongoose.model('postagens')

class editarPostagemProcessCommand {
    static execute(req, res) {
        Postagem.updateOne({_id: req.body.id}, {
            titulo: req.body.titulo,
            resumo: req.body.resumo,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria
        }).then(() => {
            req.flash('suc', 'Dados editados!')
            res.redirect('/frontController/adminPostagens')
        }).catch((err) => {
            req.flash('err', 'Houve um erro ao finalizar a edição. Tente novamente')
            res.redirect('/frontController/adminPostagens')
        })
    }
}

module.exports = editarPostagemProcessCommand