console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//prestar atenção!!!!
function logThis() {
    console.log('Dentro de uma Função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)//dentro de uma função vai deixar o objeto com escopo global
}

logThis()