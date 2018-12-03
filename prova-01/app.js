var instituicoes = []
var alunos = []

adicionarInstituicao = () => {
    let nomeInstituicao = document.getElementById('input_nome_instituicao').value
    instituicoes.push(nomeInstituicao)
    instituicoes.sort()
    atualizarInstituicoes()
    listar_instituicoes_select()
}

atualizarInstituicoes = () => {
    const lista = document.getElementById('lista_inst')
    lista.innerHTML = ''
    instituicoes.forEach((obj, index) => {
        lista.appendChild(criarItemInstituicao(obj, index))
    })
}

adicionarAluno = () => {
    let nomeAluno = document.getElementById('input_nome_aluno').value
    let nomeInstituicao = document.getElementById('select_inst').value
    alunos.push({nome: nomeAluno, instituicao: nomeInstituicao})
    atualizarAlunos()
}

atualizarAlunos = () => {
    const lista = document.getElementById('lista_aluno')
    lista.innerHTML = ''
    alunos.forEach((obj, index) => {
        lista.appendChild(criarItemAluno(obj, index))
    })
}

atualizarInstituicoes = () => {
    const lista = document.getElementById('lista_inst')
    lista.innerHTML = ''
    instituicoes.forEach((obj, index) => {
        lista.appendChild(criarItemInstituicao(obj, index))
    })
}

criarItemInstituicao = (obj, index) => {
    let e = document.createElement('li')
    e.innerHTML = descricaoInstituicao(obj)
    return e
}

criarItemAluno = (obj, index) => {
    let e = document.createElement('li')
    e.innerHTML = descricaoAluno(obj, index)
    return e
}

descricaoAluno = (obj, index) => {
    return obj.nome + ' : ' + obj.instituicao +
    '<button class="btnEditar">Editar</button>' +
    '<button class="btnExcluir" onclick="removerAluno('+index+')">Remover</button>'
}

descricaoInstituicao = (obj, index) => {
    return obj +
    '<button class="btnEditar">Editar</button>' +
    '<button class="btnExcluir" onclick="removerIntituicao('+index+')">Remover</button>'
}


listar_instituicoes_select = () => {
    let listarInstituicoes = document.getElementById('select_inst')
    listarInstituicoes.innerHTML = ''
    for(let i = 0; i<instituicoes.length; i++){
        let option = document.createElement('option')
        option.text = instituicoes[i]
        listarInstituicoes.add(option)
    }
}

atualizarHTMLItemAlunos = (index) => {
    const lista = document.getElementById('lista_aluno')
    //lista.removeChild(lista.children[index])
    atualizarAlunos()
}
atualizarHTMLItemInstituicoes = (index) => {
    const lista = document.getElementById('lista_inst')
    //lista.removeChild(lista.children[index])
    atualizarInstituicoes()
} 

removerAluno = (index) => {
    alunos.splice(index, 1)
    atualizarHTMLItemAlunos(index)
}
removerIntituicao = (index) => {
    instituicoes.splice(index, 1)
    atualizarHTMLItemInstituicoes(index)
}