const arraysNumeros = [36, 82, 64, 21, 7]
const arraysStrings = ["papel", "sofá", "janela", "abelha"]
const arrayVariado = [57, "pêra", true, "azul", 92]

console.log(arraysNumeros.length)
console.log(arraysStrings.length)
console.log(arrayVariado.length)

console.log([arraysNumeros[0], arraysStrings[1], arrayVariado[2]])

const verif1 = arraysNumeros.includes(82)
const verif2 = arrayVariado.includes(82)

console.log(verif1,verif2)