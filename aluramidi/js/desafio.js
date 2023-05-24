let listaDeTeclas = document.querySelectorAll('.tecla');
let tela = document.querySelector('.tela');
let teclaApagar = document.querySelector('.teclaApaga');
let teclaEspaco = document.querySelector('.teclaEspaco');

for(let i = 0; i < listaDeTeclas.length; i++) {
    let tecla = listaDeTeclas[i];

    tecla.onclick = function() {
        tela.value += tecla.value;
    }
    
    teclaEspaco.onclick = function() {
        tela.value += ' ';
    }

    teclaApagar.onclick = function() {
        tela.value = '';
    }
}
