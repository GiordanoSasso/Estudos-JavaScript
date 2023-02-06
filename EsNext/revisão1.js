//let e const
{
    var a = 2
    let b = 3
    console.log(b)//LET não será chamado a não ser que esteja dentro da função correspondente
}
console.log(a)// var pode ser chamado fora do bloco da função

// Template String,interpola strings e números
const valor = 12599.99
console.log(`o valor do Ipad é ${valor}`)

//Destructuring,forma de tirar de dentro de uma estrutura algo.
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = {nome: 'Ana', idade: 9}
console.log(idade, nome)
