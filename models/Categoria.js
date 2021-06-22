const mongoose = require('mongoose')

const Categoria = new mongoose.Schema({
    nome: String,
    link: String
})

mongoose.model('categorias', Categoria)
module.exports = Categoria