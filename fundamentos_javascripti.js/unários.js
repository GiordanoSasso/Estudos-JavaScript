let num1 = 1
let num2 = 2

num1++//prefix acrescenta 1 unidade na variável
console.log(num1)
--num1//possui prioridade 
console.log(num1)

console.log(++num1 === num2--)//da verdadeiro pois executa subtração somente no final da comparação

console.log(num1 === num2)
