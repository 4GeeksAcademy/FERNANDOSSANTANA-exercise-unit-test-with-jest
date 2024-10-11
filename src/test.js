// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One euro should be 156.5 japan yen", function() {
    // Importo la funcion desde app.js
    const { fromEuroTojapanYen } = require('./app.js');

    // Uso la función como debe ser usada
    const JPY = fromEuroTojapanYen(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromEuroTojapanYen(3.5)).toBe(547.75); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One euro should be 0.87 british pound", function() {
    // Importo la funcion desde app.js
    const { fromEuroTobritishPound } = require('./app.js');

    // Uso la función como debe ser usada
    const GBP = fromEuroTobritishPound(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromEuroTobritishPound(3.5)).toBe(3.045); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})