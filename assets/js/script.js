let novocard = document.querySelector('#resultado');
let inputCep = document.querySelector('#cep')
let estado = document.querySelector('.estado')

function buscarAPI() {
    let cep = inputCep.value;
    if (cep.length != 8 || cep == "" || cep == null || cep == undefined){
        estado.style.color = "red"
        estado.textContent = "Insira o cep correto!"
    } else{
        estado.style.color = "green"
        estado.textContent = "Buscando Endereço..."
        setTimeout(function(){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(jsonData => {
                    if(jsonData.erro == true){
                        console.log('Erro ao encontrar o cep')
                        estado.style.color = "red"
                        estado.textContent = "Endereço não Encontrado!"
                        novocard.innerHTML = ""
                        novocard.style.display = "none"
                    } else{
                        estado.textContent = "Endereço Encontrado"
                        novocard.style.display = "block"
                        novocard.innerHTML = `<h1>Endereço Encontrado!</h1>
                                                    <p>Bairro: ${jsonData.bairro}</p>
                                                    <p>Cep: ${jsonData.cep}</p>
                                                    <p>Complemento: ${jsonData.complemento}</p>
                                                    <p>ddd: ${jsonData.ddd}</p>
                                                    <p>Localidade: ${jsonData.localidade}</p>
                                                    <p>logradouro: ${jsonData.logradouro}</p>
                                                    <p>Estado: ${jsonData.uf}</p>`
                        location.href = "#resultado"
                    }
                })
            },2000)
    }
}
function resetar(){
    novocard.innerHTML = ""
    estado.innerHTML = ""
    novocard.style.display = "none"
    inputCep.value = ""
}