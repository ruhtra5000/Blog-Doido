const mongoose = require('mongoose')
require('../../../models/Postagem')
const Postagem = mongoose.model('postagens')
require('../../../models/Categoria')
const Categoria = mongoose.model('categorias')

class editarPostagemCommand{
    static execute(req, res) {
        Postagem.findOne({_id: req.query.id}).lean().then((postagem) => {
            Categoria.find().lean().then((categorias) => {
                res.render('admin/editPostagem', {postagem: postagem, categorias: categorias})
            })
        })
    }
}

module.exports = editarPostagemCommand