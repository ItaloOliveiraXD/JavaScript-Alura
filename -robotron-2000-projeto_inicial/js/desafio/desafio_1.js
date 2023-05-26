let texto = document.querySelector('#texto');
texto.addEventListener("click", () => {
    texto.innerHTML = "Chegou o inverno!";
    console.log('Inverno chegou!');
});