function calculateFinalPrice(cost, profitMargin) {
  const isNumeric = value => typeof value === 'number' && Number.isFinite(value);

  if (!isNumeric(cost) || !isNumeric(profitMargin)) {
    throw new TypeError('Custo e margem devem ser números válidos');
  }

  if (cost <= 0) {
    throw new RangeError('Custo deve ser maior que zero');
  }

  if (profitMargin < 0) {
    throw new RangeError('Margem de lucro não pode ser negativa');
  }

  const finalPrice = cost + (cost * profitMargin) / 100;
  return Number(finalPrice.toFixed(2));
}

module.exports = {
  calculateFinalPrice,
};

    function calcular() {
            const preco = parseFloat(document.getElementById('preco').value);
            const margem = parseFloat(document.getElementById('margem').value);
            const resultado = document.getElementById('resultado');

            if (isNaN(preco) || isNaN(margem)) {
                resultado.textContent = "Por favor, insira valores válidos.";
                return;
            }

            const finalPrice = preco + (preco * margem / 100);
            resultado.textContent = `O preço final é: R$ ${finalPrice.toFixed(2)}`;
        }