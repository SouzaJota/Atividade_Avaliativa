// 1. A Função (O Jest vai ler isso)
function calculateDiscount(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Valor deve ser numérico");
    }
    if (value < 0) {
        throw new Error("Valor não pode ser negativo");
    }

    let finalValue = value;
    if (value > 500) {
        finalValue = value * 0.8;
    } else if (value > 100) {
        finalValue = value * 0.9;
    }
    return parseFloat(finalValue.toFixed(2));
}

// 2. O Código do Navegador (O Jest vai ignorar isso por causa do IF)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('btnCalcular');
        const input = document.getElementById('valorCompra');
        const display = document.getElementById('resultado');
        const texto = document.getElementById('textoResultado');

        if (btn) {
            btn.addEventListener('click', () => {
                const valorOriginal = parseFloat(input.value);
                try {
                    const valorComDesconto = calculateDiscount(valorOriginal);
                    display.style.display = 'block';
                    texto.innerHTML = `<p>Total: <strong>R$ ${valorComDesconto.toFixed(2)}</strong></p>`;
                } catch (error) {
                    alert(error.message);
                }
            });
        }
    });
}

// Exportação para o Jest
module.exports = { calculateDiscount };