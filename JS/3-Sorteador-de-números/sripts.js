const quantity = document.getElementById("quantity")
const minValue = document.getElementById("minValue")
const maxValue = document.getElementById("maxValue")
const form = document.querySelector("form")
const checkBox = document.getElementById("repeatValue")

const formSection = document.querySelector(".content-form-inputs")
const resultBox = document.querySelector(".show-result")

const btnNovamente = document.querySelector(".sortearDenovo")

const animationContainer = document.querySelector(".animation-result")

//Capturando os valores numéricos dos formulários 
function getInputsValues (input) {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "")
    })
}

function sorteador(quantidade, valorMin, valorMax){
    let listValue = [] 
    for(let i = 0; i < quantidade; i++){
        let valorSorteado = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin
        
        //Evita valores repetido se a checkbox estiver ativa
        if(checkBox.checked){
            if(listValue.includes(valorSorteado)){
                i--
                continue
            }            
        }
        //adiciona valor na lista
        listValue.push(valorSorteado)
    }

    return listValue
}

function mostrarValor(lista){

    animationContainer.innerHTML = ""

    lista.forEach((numeroSorteado, index) => {
        setTimeout(() => {
            const anim = document.createElement("div")
            anim.classList.add("animation")

            const bg = document.createElement("div")
            bg.classList.add("rotating-bg")

            const span = document.createElement("span")
            span.textContent = numeroSorteado

            anim.appendChild(bg)
            anim.appendChild(span)
            animationContainer.appendChild(anim)
        },index * 5000)

    })
}

getInputsValues(quantity)
getInputsValues(minValue)
getInputsValues(maxValue)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let quantidade = Number(quantity.value)
    let valorMin = Number(minValue.value)
    let valorMax = Number(maxValue.value)

    let listaDeNumeros = sorteador(quantidade, valorMin, valorMax)

    mostrarValor(listaDeNumeros)

    //esconde a div dos inputs
    formSection.classList.add("hide")

    //mostra a div dos resultados
    resultBox.classList.remove("hide")

    quantity.value = ""
    minValue.value = ""
    maxValue.value = ""
})


btnNovamente.addEventListener("click", () => {
    resultBox.classList.add("hide")
    formSection.classList.remove("hide")

    animationContainer.innerHTML = " "
})