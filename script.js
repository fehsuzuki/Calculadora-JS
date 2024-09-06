const toggleTheme = document.getElementById('toggleBtn')

toggleTheme.addEventListener('click', function() {
    const header = document.querySelector('.header')
    header.classList.toggle('light-theme-header')

    const toggleLabel = document.querySelector('.toggle-div label')
    toggleLabel.classList.toggle('light-theme-toggle-label')

    const backGround =  document.body
    backGround.classList.toggle('light-theme-background')

    const inputBorder = document.querySelector('.container .text-input')
    inputBorder.classList.toggle('light-theme-input-border')

    const buttonText = document.querySelectorAll('.grid-buttons button')
    buttonText.forEach(function(row) {
        row.classList.toggle('light-theme-button-text')
    })

    const copyInputBorder = document.getElementById('copyInput')
    copyInputBorder.classList.toggle('light-theme-input-border')

    const copyBtn = document.getElementById('btnCopy');
    copyBtn.classList.toggle('light-theme-btn-border')
})