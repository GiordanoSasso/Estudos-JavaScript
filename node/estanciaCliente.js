const contadorA = require('./estanciaÚNICA')
const contadorB = require('./estanciaÚNICA')

const contadorC = require('./estanciaNova')()
const contadorD = require('./estanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)