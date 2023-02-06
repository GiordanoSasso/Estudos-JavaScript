//é uma estrutura de conjunto,não indexado não aceita repetição.
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo').add('Internacional').add('Grêmio')
times.add('Vasco')

console.log(times)
console.log(times.size)//mostra número de posições
console.log(times.has('vasco'))
console.log(times.has('Vasco'))//teste para saber sobre um elemento do set
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

