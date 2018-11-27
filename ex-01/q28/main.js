var nomes = new Array()
var qtde = {}

adicionar = () => {
    let nome = document.getElementById('input_lista').value

    nomes.push(nome)

    if(!qtde[nome]){
        qtde[nome] = 1
    }else{
        qtde[nome]++
    }
    
    let lista = document.getElementById('nomes').innerHTML
    
    lista = ''
    
    verificar(qtde).forEach((i) => {
        lista = lista + '<li>' + i.key + " : " + i.value + '</li>'
        document.getElementById('nomes').innerHTML = lista
    })
}

verificar = (qtde) => {
    return Object.keys(qtde).map((key) => {
        return {
            key: key,
            value: qtde[key]
        }
    }).sort((a, b) => (b.value - a.value))
}

/*



*/