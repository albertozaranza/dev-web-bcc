verificar = () => {
    let div = document.getElementById('resultado')
    for(let i=1; i<=10; i++){
        //document.write('<br>')
        document.write('Tabuada de ' + i + '<br>')
        document.write('<br>')
        for(let j=1; j<=10; j++){
            let rep = document.createElement('div')
            rep.style.border = '1px solid black'
            rep.style.height = '25px'
            rep.style.width = '100px'
            rep.style.padding = '5px'
            rep.innerHTML = i + ' x ' + j + ' = ' + i*j + '<br>'
            div.appendChild(rep)
        }
        if(i<10){
            document.write('<br>')
        }
    }   
}

/*

function tabuada(t) {
    let code = "<div class='tabuada'>"
    for (let i = 1; i <= 10; ++i) {
        code += 
          "" + t +" x " +i+" = " + (t*i) +"<br/>"
    }
    code += "</div>"
    return code
}

window.onload = () => {
    let div = document.getElementById('res22')
    for (let t = 1; t <= 10; ++t)
        div.innerHTML += tabuada(t)
}



CSS:

div {
    border: 1px solid red;
    padding: 10px;
    margin: 10px;
}

.tabuada {
    display:inline-block;
    
    position: relative;
}

*/