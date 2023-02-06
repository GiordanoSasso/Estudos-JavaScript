const porta = 3003
//cada processo que precisa fazer uma comunicação com rede precisa ter uma porta

const express = require('express')//importando o express
const app = express()//instanciando a express
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))//todas as requições irão ser disparadas

app.get('/produtos', /*padrão moddleware*/(req, res,) => {//get é uma forma de requisição
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//converte obj em JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//converte obj em JSON
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})