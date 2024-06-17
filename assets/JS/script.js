document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const porcentagem = parseFloat(document.getElementById('n1').value);
    const valor = parseFloat(document.getElementById('n2').value);
  
    if (!isNaN(porcentagem) && !isNaN(valor)) { 
        const resultado = (porcentagem / 100) * valor;
        const resultadoFormatado = `${porcentagem}% de R$ ${valor.toFixed(2).replace('.', ',')} é <span class="resultado-verde">R$ ${resultado.toFixed(2).replace('.', ',')}</span>.`;
        document.getElementById('resultado').innerHTML = resultadoFormatado;
    } 
  });
  
  document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('resultado').textContent = '';
  });
  