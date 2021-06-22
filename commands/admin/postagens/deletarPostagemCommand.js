const mongoose = require('mongoose')
require('../../../models/Postagem')
const Postagem = mongoose.model('postagens')

class deletarPostagemCommand{
    static execute(req, res) {
        Postagem.deleteOne({_id: req.body.id}).then(() => {
            req.flash('suc', 'Postagem deletada com sucesso!')
            res.redirect('/frontController/adminPostagens')
        }).catch((err) => {
            req.flash('err', 'Houve um erro interno. Tente novamente.')
            res.redirect('/frontController/adminPostagens')
        })
    }
}

module.exports = deletarPostagemCommand