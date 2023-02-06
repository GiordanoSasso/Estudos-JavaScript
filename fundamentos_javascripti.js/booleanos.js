isAtivo = true
console.log(isAtivo);

isAtivo=1
console.log(!!isAtivo);
//(!)muda a função (!!)retorna para primeira função

console.log("os Verdadeiros...")
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log("os Falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || "Desconhecido")