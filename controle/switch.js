const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {//Math.floor irá arredondar o número para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break//irá parar a execução dos case
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)