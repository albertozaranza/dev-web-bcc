var nomes = new Array()

adicionar = () => {
    
    let nome = document.getElementById('input_lista').value

    nomes.push(nome)

    let lista = document.getElementById('nomes').innerHTML

    lista = ''

    for(var i = 0; i<nomes.length; i++){
        if(i%2==1){
            lista = lista + '<li class="destaque">' + nomes[i] + '</li>'
        } else
            lista = lista + '<li>' + nomes[i] + '</li>'
    
        document.getElementById('nomes').innerHTML = lista
    }

}