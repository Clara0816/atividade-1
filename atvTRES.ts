let teclado = require(`prompt-sync`) ();
let tempcelcius = parseInt(teclado(`Digite o número de graus celcius `));

let Fahrenheit: number = tempcelcius * (9/5) + 32;

console.log (`O valortransformado de celcius em Fahrenheit é de ${Fahrenheit}`);