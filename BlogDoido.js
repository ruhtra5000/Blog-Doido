// Importando módulos
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

const {frontController} = require('./frontController')

const pagPrinc = require('./commands/pagPrincCommand')
const leitura = require('./commands/leituraCommand')
const categorias = require('./commands/categoriasCommand')
const categoriaBusca = require('./commands/categoriaBuscaCommand')

const admin = require('./commands/admin/adminCommand')
const adminCategorias = require('./commands/admin/categorias/adminCategoriasCommand')
const criarCategoria = require('./commands/admin/categorias/criarCategoriaCommand')
const criarCategoriaProcess = require('./commands/admin/categorias/criarCategoriaProcessCommand')
const editarCategoria = require('./commands/admin/categorias/editarCategoriaCommand')
const editarCategoriaProcess = require('./commands/admin/categorias/editarCategoriaProcessCommand')
const deletarCategoria = require('./commands/admin/categorias/deletarCategoriaCommand')

const adminPostagens = require('./commands/admin/postagens/adminPostagensCommand')
const criarPostagem = require('./commands/admin/postagens/criarPostagemCommand')
const criarPostagemProcess = require('./commands/admin/postagens/criarPostagemProcessCommand')
const editarPostagem = require('./commands/admin/postagens/editarPostagemCommand')
const editarPostagemProcess = require('./commands/admin/postagens/editarPostagemProcessCommand')
const deletarPostagem = require('./commands/admin/postagens/deletarPostagemCommand')

//Configurações
    //Sessão
    app.use(session({
        secret: 'Blogmassa',
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())
    //Middleware
    app.use((req, res, next) => {
        res.locals.err = req.flash('err')
        res.locals.suc = req.flash('suc')
        next()
    })
    //Express
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    //Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main', 
        helpers: {
            converterData: function(Data){
                var data = new Date(Data).toISOString()
                data = data.split("-") // 0- ano, 1- mes, 2- resto
                var data2 = data[2].split('T') // 0- dia, 1- resto
                var data3 = data2[1].split(':') //0- hora, 1- minuto, 2- resto
                return `${data2[0]}/${data[1]}/${data[0]} ${data3[0]}:${data3[1]}`
            }
        }
    }))
    app.set('view engine', 'handlebars')
    //Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/blogdoido', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('Banco de dados conectado!')
    }).catch((err) => {
        console.log('Houve um erro ao conectar com o banco de dados: ' + err)
    })

//Rotas

app.get('/frontController/:command', (req, res) => {
    frontController(req, res, eval(req.params.command))
})

app.post('/frontController/:command', (req, res) => {
    frontController(req, res, eval(req.params.command))
})

app.get('/', (req, res) => {
    res.redirect('/frontController/pagPrinc')
})

//Outros
const porta = 9899
app.listen(porta, () => {
    console.log('Servidor rodando na URL: http://localhost:9899')
})