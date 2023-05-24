function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (!elemento || elemento.localName != 'audio') {

        console.log('Informe um elemento válido');
    } else {

        elemento.play();
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const atributoTecla = tecla.classList[1];
    const idSom = `#som_${atributoTecla}`; // Template String.

    tecla.onclick = function () {
        tocaSom(idSom);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function (evento) {

        tecla.classList.remove('ativa');

    }
}
