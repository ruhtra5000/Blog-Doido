const mongoose = require('mongoose')

const Postagem = new mongoose.Schema({
    titulo: String,
    resumo: String,
    conteudo: String,
    data: {
        type: Date,
        default: Date.now()
    },
    categoria: {
        type: mongoose.Types.ObjectId,
        ref: 'categorias'
    }
})

mongoose.model('postagens', Postagem)
module.exports = Postagem