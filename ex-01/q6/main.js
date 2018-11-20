verificar = () => {
    let lampada = document.getElementById('lampada').getAttribute('src')
    if(lampada == 'img/lampada.png')
        document.getElementById('lampada').setAttribute('src', 'img/lampada-acesa.png')
    else
        document.getElementById('lampada').setAttribute('src', 'img/lampada.png')
}