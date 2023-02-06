const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { fremework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').fremework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))//linha 11 foi eliminada com a função delete
console.log(chavesVariadas.size)