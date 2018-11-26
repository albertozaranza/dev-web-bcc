var nomes = new Array()

adicionar = () => {
    
    let nome = document.getElementById('input_lista').value

    nomes.push(nome)
    nomes.sort()

    let lista = document.getElementById('nomes').innerHTML

    lista = ''

    for(var i = 0; i<nomes.length; i++){
        
        lista = lista + '<li>' + nomes[i] + '</li>'
    
        document.getElementById('nomes').innerHTML = lista
    }

}