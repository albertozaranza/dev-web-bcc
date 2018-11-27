verificar = () => {
    let contador = document.getElementById('contador')
    contador.innerHTML = '<div class="font">' + i + '</div>'
}

var i = 5

myLoop = () => {
    setTimeout(function () {
       verificar()
       i--;
       if (i >= 1) {
          myLoop();
       }
    }, 1000)
}