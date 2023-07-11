let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resp => resp.json())
    .then(resp => {
        if (resp.erro) {
            throw Error('Esse CEP não existe!')
        } else {
            console.log(resp)
        }
    })
    .catch(erro => console.log(erro))
    .finally(msg => console.log('Processamento concluído!'));
