const botao = document.querySelector('#calcular');

botao.addEventListener('click', (evento) => {
    document.querySelector('.resultado').innerHTML = 'Notas enviadas com sucesso!';
    console.log(evento);
});