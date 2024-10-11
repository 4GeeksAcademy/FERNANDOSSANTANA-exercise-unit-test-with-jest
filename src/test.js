// Importar la función sum del archivo app.js
const { describe } = require('node:test');
const { sum } = require('./app.js');

// Comienza tu primera prueba
describe ( 'sum', ()=>{
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
})
});


//fromDollarToYen
describe ( 'fromDollarToYen', ()=>{
test("1,07 dollar should be 156.5 japan yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const JPY = fromDollarToYen(1.07);
    const expected = 156.5;
    expect(JPY).toBe(expected); 
})
})

//fromEuroToDollar
describe ( 'fromEuroToDollar', ()=>{
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(1.00);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 1.07;
    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
});

//from Yen to pound
describe ( 'fromYenTobritishPound', ()=>{
test("156.5 Yen should be 0.87 british pound", function() {
    const { fromYenTobritishPound } = require('./app.js');
    const GBP = fromYenTobritishPound(156.5);
    const expected = 0.87;
    // Hago mi comparación (la prueba)
    expect(GBP).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
})