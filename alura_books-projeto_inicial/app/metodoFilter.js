const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', () => {
    filtrarLivros(btn.value);
}))

function filtrarLivros(categoria) {
    let livrosFiltrado = categoria === 'disponivel' ? filtrarPorDisponiveis() : filtarPorCategoria(categoria);

    exibirOsLivrosNaTela(livrosFiltrado);
    if (categoria === 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrado);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}
