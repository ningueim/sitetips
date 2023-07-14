fetch('1.csv')
  .then(response => response.text())
  .then(data => {
    const linhas = data.split('\n');
    const tabela = document.getElementById('tabela-dados');

    linhas.forEach(linha => {
      const colunas = linha.split(',');

      const novaLinha = document.createElement('tr');
      colunas.forEach(coluna => {
        const novoDado = document.createElement('td');
        novoDado.textContent = coluna;
        novaLinha.appendChild(novoDado);
      });

      tabela.appendChild(novaLinha);
    });
  });