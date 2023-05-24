function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    const atributoTecla = tecla.classList[1];
   
    const idSom = `#som_${atributoTecla}`; // Template String.

    tecla.onclick = function() {
        tocaSom(idSom);
    }
}
