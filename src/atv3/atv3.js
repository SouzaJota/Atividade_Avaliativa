const { calculateShipping } = require('../shipping');

const peso = document.getElementById('peso');
const distancia = document.getElementById('distancia');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
  const pesoNum = parseFloat(peso.value);
  const distanciaNum = parseFloat(distancia.value);

  try {
    const valor = calculateShipping(pesoNum, distanciaNum);
    resultado.textContent = valor;
  } catch (error) {
    resultado.textContent = error.message;
  }
});