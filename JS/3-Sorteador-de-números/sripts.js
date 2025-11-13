const quantity = document.getElementById("quantity")
const firstNumberInterval = document.getElementById("firstInterval")
const lastNumberInterval = document.getElementById("lastNumberInterval")
const form = document.querySelector("form")

//Capturando os valores numéricos dos formulários 
function getInputsValues (input) {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "")
    })

}


getInputsValues(quantity)
getInputsValues(firstNumberInterval)
getInputsValues(lastNumberInterval)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let quantidade = Number(quantity.value)
    let primeiroValor = Number(firstNumberInterval.value)
    let ultimoValor = Number(lastNumberInterval.value)

    console.log(quantidade, primeiroValor, ultimoValor)
})