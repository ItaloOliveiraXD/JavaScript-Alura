const cep = document.getElementById('cep');
const logradouro = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');
const mensagemErro = document.getElementById('erro');

cep.addEventListener('focusout', () => buscaEndereco(cep.value));

async function buscaEndereco(cep) {
    mensagemErro.innerHTML = ' ';
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let cepJSON = await consultaCEP.json()

        logradouro.value = cepJSON.logradouro;
        cidade.value = cepJSON.localidade;
        estado.value = cepJSON.uf;
        bairro.value = cepJSON.bairro;

        console.log(cepJSON);
    } catch(erro) {
        mensagemErro.innerHTML = `<p>Cep inválido! Tente novamente.</p>`
        logradouro.value = '';
        cidade.value = '';
        estado.value = '';
        bairro.value = '';
        console.log('Cep não existente!')
    }
}