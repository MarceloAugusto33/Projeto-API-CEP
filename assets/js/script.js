import alertError from "./alertError.js";
import Modal from "./modal.js";

const inputCEP = document.querySelector('#inputCEP');
const buttonGetCep = document.querySelector('#getCep');
const divAlertError = document.querySelector('.alertError');
const divModalWrapper = document.querySelector('.modal-wrapper');
const buttonClose = document.querySelector('#btnClose');
const divModaltext = document.querySelector('.modalText');


const alert = alertError({
    divAlertError
});

const modal = Modal({
    divModalWrapper,
    divModaltext
})


buttonGetCep.addEventListener('click', getEndressApi)
buttonClose.addEventListener('click', modal.close);
inputCEP.addEventListener('input', alert.close);
inputCEP.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        getEndressApi();
        inputCEP.blur();
    }
});


//FUNÇAO PARA PEGAR O ENDEREÇO DO CEP
function getEndressApi(e) {
    e.preventDefault()
    let CEP = inputCEP.value

    if (!CEP || CEP.length != 8) {
        alert.open()
        return
    }

    try {
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
            .then(reponse => {
                return reponse.json()
            })
            .then(jsonAdress => {
                if (jsonAdress.erro) return alert.open()
                modal.open(jsonAdress);
                inputCEP.value = ''
            })
            .catch(err => {
                alert.open()
            })
    } catch (err) {
        alert.open()
    }
}