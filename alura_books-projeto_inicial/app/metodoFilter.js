const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', () => {
    filtrarLivros(btn.value);
}))

function filtrarLivros(categoria) {
    let livrosFiltrado = [];
    if (categoria === 'disponivel') {
        livrosFiltrado = livros.filter(livro => livro.quantidade > 0);
    } else {
        livrosFiltrado = livros.filter(livro => livro.categoria === categoria);
    }
    exibirOsLivrosNaTela(livrosFiltrado);
}