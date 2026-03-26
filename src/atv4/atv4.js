function calculateNetProfit(salePrice, productCost, operationalCosts) {
  if (
    typeof salePrice !== 'number' ||
    typeof productCost !== 'number' ||
    typeof operationalCosts !== 'number'
  ) {
    throw new Error('Todos os valores devem ser numéricos');
  }

  if (salePrice < 0 || productCost < 0 || operationalCosts < 0) {
    throw new Error('Os valores não podem ser negativos');
  }

  const netProfit = salePrice - productCost - operationalCosts;

  return Number(netProfit.toFixed(2));
}


function calcular() {
  const venda = Number(document.getElementById('venda').value);
  const custo = Number(document.getElementById('custo').value);
  const custos = Number(document.getElementById('custos').value);

  try {
    const lucro = calculateNetProfit(venda, custo, custos);
    document.getElementById('resultado').innerText = `Lucro líquido: R$ ${lucro}`;
  } catch (erro) {
    document.getElementById('resultado').innerText = erro.message;
  }
}
if (typeof module !== 'undefined') {
  module.exports = { calculateNetProfit };
}