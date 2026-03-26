<<<<<<< HEAD
=======

const { calculateShipping } = require('./shipping.js'); 
describe('calculateShipping', () => { 
test('deve calcular corretamente o frete com peso e distância', () => { 
const result = calculateShipping(10, 100);  
expect(result).toBe(15.00); 
}); 
test('deve calcular corretamente com valores zero', () => { 
expect(calculateShipping(0, 100)).toBe(10.00); 
expect(calculateShipping(10, 0)).toBe(5.00); 
}); 
test('deve retornar 0 quando peso e distância forem zero', () => { 
expect(calculateShipping(0, 0)).toBe(0.00); 
}); 
test('deve lançar erro para valores negativos', () => { 
expect(() => calculateShipping(-1, 10)).toThrow(); 
expect(() => calculateShipping(10, -1)).toThrow(); 
}); 
test('deve lançar erro para valores não numéricos', () => { 
expect(() => calculateShipping("10", 100)).toThrow(); 
expect(() => calculateShipping(10, "100")).toThrow(); 
}); 
});
>>>>>>> 99d8153e48da945b0966c12cf926cddd441a705e
