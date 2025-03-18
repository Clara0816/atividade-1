let teclado = require (`prompt-sync`) ()
let Fahrenheit = parseInt(teclado(`Digite o número de graus celcius: `))

let celcius: number = (Fahrenheit - 32) * 5/9

console.log (`O valor transformado de celcius em Fahrenheit é de ${celcius}`)
