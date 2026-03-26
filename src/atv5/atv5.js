// 1. A Função de Lógica (O Jest vai ler isso)
function calculateROI(investimento, receita) {
    // Validação de tipos e valores inválidos (conforme o teste pede)
    if (typeof investimento !== 'number' || typeof receita !== 'number' || isNaN(investimento) || isNaN(receita)) {
        throw new Error("Valores devem ser numéricos");
    }
    
    if (investimento < 0 || receita < 0) {
        throw new Error("Valores não podem ser negativos");
    }

    // Tratamento de divisão por zero (Caso extremo)
    if (investimento === 0) {
        throw new Error("O investimento não pode ser zero");
    }

    // Fórmula do ROI: ((Receita - Investimento) / Investimento) * 100
    const roi = ((receita - investimento) / investimento) * 100;

    return parseFloat(roi.toFixed(2));
}

// 2. O Código do Navegador (O Jest ignora isso)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('btnCalcularROI');
        const inputInvest = document.getElementById('investimento');
        const inputReceita = document.getElementById('receita');
        const display = document.getElementById('resultadoROI');
        const texto = document.getElementById('textoROI');

        if (btn) {
            btn.addEventListener('click', () => {
                const invest = parseFloat(inputInvest.value);
                const rec = parseFloat(inputReceita.value);

                try {
                    const resultado = calculateROI(invest, rec);
                    display.style.display = 'block';
                    
                    // Muda a cor baseado no resultado (verde para lucro, vermelho para prejuízo)
                    const cor = resultado >= 0 ? '#1eff00' : '#ff6b6b';
                    
                    texto.innerHTML = `
                        <p>ROI Calculado: <strong style="color: ${cor};">${resultado.toFixed(2)}%</strong></p>
                    `;
                } catch (error) {
                    alert(error.message);
                    display.style.display = 'none';
                }
            });
        }
    });
}

// Exportação para o Jest
module.exports = { calculateROI };