const nomes = []

novoNome = () => {
    adicionar(document.getElementById('input_lista').value)
    atualizarHTML()
}

adicionar = (nome) => {
    let obj = nomes.find((e) => {
        return e.nome === nome
    })

    if (obj === undefined) {
        nomes.push({ nome: nome, frequencia: 1 })
    } else {
        ++obj.frequencia;
    }

    nomes.sort(byFrequencia);
}

criarItem = (obj, index) => {
    let e = document.createElement('li')
    e.innerHTML = descricao(obj)
    e.setAttribute('onclick', 'excluir('+index+')')
    return e
}

descricao = (obj) => {
    return obj.nome + ' (' + obj.frequencia + ')'
}

atualizarHTML = () => {
    const list = document.getElementById('nomes')
    list.innerHTML = ''
    nomes.forEach((obj, index) => {
        list.appendChild(criarItem(obj, index))
    })
}

atualizarHTMLItem = (index) => {
    const list = document.getElementById('nomes')
    let itens = document.getElementsByTagName('li')

    if (nomes[index].frequencia == 0) {
        nomes.splice(index,1)
        list.removeChild(list.children[index])
    } else {
        list.children[index].innerHTML = 
            descricao(nomes[index])
    }
}   

excluir = (index) => {
    --nomes[index].frequencia
    atualizarHTMLItem(index)
}

byFrequencia = (a, b) => {
    return -(a.frequencia - b.frequencia)
}