const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
/* sempre que o número do array não
estiver no índice aparecerá undefined*/
valores[4]=10
console.log(valores)
console.log(valores.length)
/*variável length dirá quantos elementos
tenho no array*/

valores.push({id: 3}, false, null, 'teste')
/*push eu consigo acrescentar 
coisas dentro do array*/
console.log(valores)

console.log(valores.pop())
/*valores.pop retira o último 
valor do array*/
delete valores[0]
console.log(valores)
/* (delete valores)vai eleiminar do array 
o índice escolhido*/
console.log(typeof valores)