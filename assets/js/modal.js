export default function Modal({
    divModalWrapper,
    divModal
}){
    function open(jsonAdress) {
        divModalWrapper.classList.remove('hide')
        divModal.textContent = `
            <h2> Endereço Encontrado! </h2>
            <p> ${jsonAdress.cep}</p>
        ` 
    }

    return {
        open
    }
}