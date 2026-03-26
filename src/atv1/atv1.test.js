const { calculateFinalPrice } = require('./atv1');

describe('calculateFinalPrice', () => {
  test('deve calcular corretamente o preço com margem de lucro', () => {
    const result = calculateFinalPrice(100, 20);
    expect(result).toBe(120.0);
  });

  test('deve retornar o mesmo valor quando margem for 0%', () => {
    const result = calculateFinalPrice(100, 0);
    expect(result).toBe(100.0);
  });

  test('deve lançar erro para valores negativos', () => {
    expect(() => calculateFinalPrice(-100, 20)).toThrow();
    expect(() => calculateFinalPrice(100, -20)).toThrow();
  });

  test('deve lançar erro para valores não numéricos', () => {
    expect(() => calculateFinalPrice('100', 20)).toThrow();
    expect(() => calculateFinalPrice(100, '20')).toThrow();
  });
});
