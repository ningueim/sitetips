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
  fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const divDados = document.getElementById('dados');

    // Limpar o conteúdo atual da div
    divDados.innerHTML = '';

    // Manipular os dados para exibição no HTML
    data.forEach(item => {
      const p = document.createElement('p');

      // Iterar pelas propriedades do objeto JSON
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          const span = document.createElement('span');
          span.textContent = `${key}: ${item[key]}, `;
          p.appendChild(span);
        }
      }

      divDados.appendChild(p);
    });
  });
