verificar = () => {
    let div = document.getElementById('resultado')
    for(let i=2; i<=500; i=i+2){
        let rep = document.createElement('div')
        rep.innerHTML = i + '<br>'
        div.appendChild(rep)
    }   
}