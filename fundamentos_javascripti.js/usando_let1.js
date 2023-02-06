let numero = 1
{
    let  numero = 2//escopo global/função/bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)