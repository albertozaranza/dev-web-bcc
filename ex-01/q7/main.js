verificar = (over) => {
    if(over == true)
        document.getElementById('lampada').setAttribute('src', 'img/lampada-acesa.png')
    else if (over == false)
        document.getElementById('lampada').setAttribute('src', 'img/lampada.png')
}