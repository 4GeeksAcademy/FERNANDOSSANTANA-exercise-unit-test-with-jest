
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar/1.07;
    let resultValueYen = valueInYen * 156.5;
    return resultValueYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromYenTobritishPound = function(valueInYen) {
    let valueInBritishPound = valueInYen/156.5;
    let resultValuePound = valueInBritishPound * 0.87;
    return resultValuePound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
//module.exports = { sum };
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenTobritishPound }