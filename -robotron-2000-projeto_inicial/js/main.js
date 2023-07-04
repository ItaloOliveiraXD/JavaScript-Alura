const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');

const controle = document.querySelectorAll('.controle-ajuste');
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);

    });
});

function manipulaDados(comando, controler) {
    const peca = controler.querySelector('.controle-contador');

    if (comando === '+') {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
}
