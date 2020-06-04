// populando estados e municípios

function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then( states => {
            for( state of states ){
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUfs()


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")


    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then( res => res.json())
    .then( cities => {
        


        for( city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



// ítens de coleta
const intensToColect = document.querySelectorAll(".itens-grid li")

for (let item of intensToColect) {
    item.addEventListener("click", handleSelectedItem)
}


const collectedItens = document.querySelector("input[name=itens]")


let selectedItens = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // adionar ou remover uma classe com JS
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem itens selecionados, se sim
    // pegar os items selecionados
    const alreadySelected = selectedItens.findIndex( item => item === itemId )  
    
    // se já estiver selecionado, tirar da seleção
    if( alreadySelected >= 0 ) {
        const filteredItens = selectedItens.filter( item => item != itemId)
        selectedItens = filteredItens
    } else {
        // se não estiver selecionado, add to seleção
        selectedItens.push(itemId)
    }

    // atualizar o campo escondido com os itens seleiconado
    collectedItens.value = selectedItens

    console.log(selectedItens);
        
}