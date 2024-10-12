const calc = require('./index')

const A = 12
const B = 3

console.log(`ADICAO ${A}+${B}`, calc.adicionar(A,B))
console.log(`SUBTRACAO ${A}-${B}`, calc.subtrair(A,B))
console.log(`DIVISAO ${A}/${B}`, calc.dividir(A,B))
