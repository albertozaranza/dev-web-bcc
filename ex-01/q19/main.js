verificar = () => {
    let div = document.getElementById('resultado')
    for(let i=0; i<20; i++){
        let rep = document.createElement('div')
        rep.innerHTML = 'Repetição <br>'
        div.appendChild(rep)
    }   
}