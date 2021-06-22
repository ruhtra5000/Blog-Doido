const mongoose = require('mongoose')
require('../../../models/Postagem')
const Postagem = mongoose.model('postagens')

class adminPostagensCommand{
    static execute(req, res) {
        Postagem.find().populate('categoria').sort({data: 'desc'}).lean().then((postagens) => {
            if(postagens) {
                res.render('admin/postagens', {postagens: postagens})
            }
        })
    }
}

module.exports = adminPostagensCommand