function calculateShipping(peso, distancia) {
  if (typeof peso !== 'number' || typeof distancia !== 'number') {
    throw new Error('Valores devem ser números');
  }

  if (isNaN(peso) || isNaN(distancia)) {
    throw new Error('Valores inválidos');
  }

  if (peso < 0 || distancia < 0) {
    throw new Error('Valores não podem ser negativos');
  }

  return (peso * 0.5) + (distancia * 0.1);
}

module.exports = { calculateShipping };