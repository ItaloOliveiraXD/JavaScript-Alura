let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const botaoFrontEnd = document.getElementById('btnFiltrarLivrosFront')

async function getBuscarLivrosDaAPI() {
    const response = await fetch(endpointDaAPI);
    livros = await response.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}

getBuscarLivrosDaAPI();

