import alertError from "./alertError.js";
import Modal from "./modal.js";

const inputCEP = document.querySelector('#inputCEP');
const buttonGetCep = document.querySelector('#getCep');
const divAlertError = document.querySelector('.alertError');
const divModalWrapper = document.querySelector('.modal-wrapper');
const divModal = document.querySelector('.modal')


const alert = alertError({
    divAlertError
});

const modal = Modal({
    divModalWrapper,
    divModal
})


buttonGetCep.addEventListener('click', getEndressApi)
inputCEP.addEventListener('input', alert.close)


function getEndressApi(e) {
    e.preventDefault()
    let CEP = inputCEP.value

    if (!CEP || CEP.length != 8) {
        console.log('falha')
        alert.open()
        return
    }

    try {
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
            .then((reponse) => {
                return reponse.json()
            })
            .then((jsonAdress) => {
                if (jsonAdress.erro) return alert.open()

                console.log(jsonAdress)
                modal.open(jsonAdress)
            })
            .catch((err) => {
                alert.open()
            })
    } catch (err) {
        alert.open()
    }

}