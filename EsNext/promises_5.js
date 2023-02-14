function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro: ${err}`))//forma de se tratar o erro
    .then(() => console.log('Fim!!!'))


    //cuidar para não colocar catch no meio da função