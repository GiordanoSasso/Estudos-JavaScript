const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//elimina o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen')//acrescenta algo no último elemento do array
console.log(pilotos)

pilotos.shift()//elimina primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')//acrescenta no primeiro elemento
console.log(pilotos)

//splice pode remover e acrescentar elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// cria um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)