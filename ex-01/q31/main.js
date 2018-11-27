verificar = () => {
    let urso = document.getElementById('urso')
    urso.innerHTML = '<img src="./imgs/img0' + i + '.png" class="imagem" id="imagem"/>'
    let imagem = document.getElementById('imagem')
    imagem.style.marginLeft = l + 'px'
}

var i = 1
var l = 0
var largura = window.innerWidth

myLoop = () => {
    setTimeout(() => {
        verificar()
        i++
        l += 15
        if(i==9) {
            i = 1
        }
        if(l<=(largura-165)){
            myLoop();
        }
    }, 100)
}