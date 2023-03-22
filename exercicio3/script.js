const arraysNumeros = [36, 82, 64, 21, 7]
const arraysStrings = ["papel", "sofá", "janela", "abelha"]
const arrayVariado = [57, "pêra", true, "azul", 92]

const arraysNumerosCopia = arraysNumeros.slice()
const arraysStringsCopia = arraysStrings.slice()
const arrayVariadoCopia = arrayVariado.slice()

arraysNumerosCopia.unshift(58)

console.log([arraysNumeros, arraysNumerosCopia])

arraysStringsCopia.pop()

console.log([arraysStrings, arraysStringsCopia])

arrayVariadoCopia.splice(1,1)

console.log([arrayVariado, arrayVariadoCopia])