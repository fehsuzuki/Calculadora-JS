const main = document.querySelector('main')
const root = document.querySelector(':root')

const input = document.getElementById('inputText')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//inicia a página com foco no input
input.focus()

//adiciona ao input o que o usuário digitar no teclado
input.addEventListener('keydown', function(event) {
    //previne evento padrão de prevenir que apareça o que o usuário digitar pelo teclado
    event.preventDefault()

    //se a tecla pressionada estiver dentro da lista de allowedKeys, seu valor será adicionado ao input
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return
    }

    //apaga o último elemento do input
    if(event.key === 'Backspace') {
        //input.value é igual ao input.value cortando apenas do primeiro ao penúltimo elemento (se fosse antipenúltimo seria -2)
        input.value = input.value.slice(0, -1)
    }
    //chama o evento para calcular o resultado
    if(event.key === 'Enter') {
        calculate()
    }
})

//fazer com que os botões da calculadora também adicionem seus valores ao input
document.querySelectorAll('.grid-buttons button:not(#btnCalculate)').forEach(function (button) {
    button.addEventListener('click', function () {
        const value = button.dataset.value
        input.value += value
        //fazer o foco ir de volta para o input
        input.focus()
    })
})

//botão de limpar o input 
document.getElementById('btnClear').addEventListener('click', function () {
    input.value = ''
    resultInput.value = ''
    input.focus()
})

//botão de calcular
document.getElementById('btnCalculate').addEventListener('click', calculate)

//calcula o resultado 
function calculate() {
    //vai sempre mostrar essa mensagem no resultInput 
    //caso o valor no input seja inválido, o eval não vai fazer nada e o 'ERROR' vai aparecer
    //caso o eval consiga ser executado, a mensagem de 'ERROR' vai sumir imediatamente e o resultado vai aparecer no resultInput
    resultInput.value = 'ERROR'
    //executa o que estiver no input como se fosse no console
    //TOMAR CUIDADO!
    const result = eval(input.value) 
    resultInput.value = result
}

//botão para copiar o resultado
document.getElementById('btnCopy').addEventListener('click', function() {
    navigator.clipboard.writeText(resultInput.value)
    const copyIcon = document.getElementById('copyIcon')
    copyIcon.className = 'bx bx-check'
    setTimeout(function(){
        copyIcon.className ='bx bx-copy';
   },2000);
})

//dark/light mode switch
document.getElementById('toggleBtn').addEventListener('click', function() {
    if(main.dataset.theme === 'dark') {
        root.style.setProperty('--color-background-dark', '#fff')
        root.style.setProperty('--color-black', '#fff')
        root.style.setProperty('--color-white', '#000')
        root.style.setProperty('--color-grey', '#d1d1d1')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--color-background-dark', '#202020')
        root.style.setProperty('--color-black', '#000')
        root.style.setProperty('--color-white', '#fff')
        root.style.setProperty('--color-grey', '#5c5c5c')
        main.dataset.theme = 'dark'
    }
})