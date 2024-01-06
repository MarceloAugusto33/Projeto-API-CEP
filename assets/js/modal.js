//FUNÇÃO PARA ADICIONAR OS DADOS DO MODAL

export default function Modal({
    divModalWrapper,
    divModaltext
}) {
    function open(jsonAdress) {
        divModalWrapper.classList.remove('hide')
        divModaltext.innerHTML = `
            <h3> Endereço Encontrado! </h3>
            <p> <strong>CEP</strong>: ${jsonAdress.cep ?? 'Não informado'}</p>
            <p> <strong>ESTADO</strong>: ${jsonAdress.uf ?? 'Não informado'}</p>
            <p> <strong>LOCALIDADE</strong>: ${jsonAdress.localidade ?? 'Não informado'}</p>
            <p> <strong>BAIRRO</strong>: ${jsonAdress.bairro ?? 'Não informado'}</p>
            <p> <strong>COMPLEMENTO</strong>: ${jsonAdress.complemento ?? 'Não informado'}</p>
            <p> <strong>LOGRADOURO</strong>: ${jsonAdress.logradouro ?? 'Não informado'}</p>
            <p> <strong>DDD</strong>: ${jsonAdress.ddd ?? 'Não informado'}</p>
        `
    }

    function close() {
        divModalWrapper.classList.add('hide');
    }

    return {
        open,
        close
    }
}