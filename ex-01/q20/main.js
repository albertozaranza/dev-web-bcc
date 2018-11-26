verificar = () => {
    let div = document.getElementById('resultado')
    for(let i=1; i<=100; i++){
        let rep = document.createElement('div')
        rep.innerHTML = i + '<br>'
        div.appendChild(rep)
    }   
}