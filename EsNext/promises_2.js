//callbacks
//setTimeout(function () {
//console.log('Executando uma callback...')

setTimeout(function () {
    console.log('Executando uma callback...')
    
    setTimeout(function () {
        console.log('executando uma callback...')
        
        setTimeout(function () {
            console.log('executando uma callback...')
        }, 2000)
    }, 2000)
}, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando uma Promise...')
            resolve('Vishhh')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)