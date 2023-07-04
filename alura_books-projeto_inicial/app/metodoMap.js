function aplicarDesconto(livros) {
    const desconto = 0.3;
    const livrosComDesconto = livros.map(livro => {
        return {...livro, preco: (livro.preco - (livro.preco * desconto)).toFixed(1)}
    })
    return livrosComDesconto;
}