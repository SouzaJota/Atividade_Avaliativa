const { calculateDiscount } = require('./atv2');

describe('calculateDiscount', () => {
    test('não deve aplicar desconto para valores até 100', () => {
        expect(calculateDiscount(100)).toBe(100.00);
    });

    test('deve aplicar 10% de desconto para valores entre 101 e 500', () => {
        expect(calculateDiscount(200)).toBe(180.00);
    });

    test('deve lançar erro para valores negativos', () => {
        expect(() => calculateDiscount(-10)).toThrow("Valor não pode ser negativo");
    });
});