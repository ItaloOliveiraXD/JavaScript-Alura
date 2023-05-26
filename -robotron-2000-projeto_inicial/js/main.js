const braco = document.querySelector('#braco');
const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    });
} );

somar.addEventListener("click", () => manipulaDados('somar'));

subtrair.addEventListener("click", () => manipulaDados('subtrair'));

function manipulaDados(comando) {
    if (comando === '+') {
        braco.value = parseInt(braco.value) + 1;
    } else {
        braco.value = parseInt(braco.value) - 1;
    }
}