var instituicoes = []
var alunos = []
var idInstituicao = 0
var matricula = 10000

/*

FUNÇÕES DA INSTITUIÇÃO

*/

adicionarInstituicao = () => {
    let nomeInstituicao = document.getElementById('input_nome_instituicao')
    if(nomeInstituicao.value == ''){
        alert('Insira o nome da instituição')
    } else {
        instituicoes.push({nome: nomeInstituicao.value, id: idInstituicao})
        idInstituicao++
        instituicoes.sort(byId)
        atualizarInstituicoes()
        listarInstituicoesSelect()
        nomeInstituicao.value = ''
    }
}

atualizarInstituicoes = () => {
    const lista = document.getElementById('lista_inst')
    lista.innerHTML = ''
    instituicoes.forEach((obj, index) => {
        lista.appendChild(criarItemInstituicao(obj, index))
    })
}

criarItemInstituicao = (obj, index) => {
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.innerHTML = descricaoInstituicao(obj, index)
    return li
}

descricaoInstituicao = (obj, index) => {
    return 'ID: ' + obj.id +
    ' / Nome: ' + obj.nome +
    '<button onclick="editarInstituicao('+index+')" class="btn btn-success ml-3">Editar</button>' +
    '<button onclick="removerInstituicao('+index+')" class="btn btn-danger ml-3">Remover</button>'
}

removerInstituicao = (index) => {
    let matriculados = false
    alunos.forEach((objAluno) => {
        if(instituicoes[index].id == objAluno.idInstituicao){
            matriculados = true
        }
    })
    if(matriculados == false){
        instituicoes.splice(index, 1)
        atualizarItemInstituicoes()
    } else {
        alert('Não é possível excluir a instituição pois há alunos matriculados')
    }
    
}

editarInstituicao = (index) => {
    let nome = prompt('Insira o novo nome: ')
    let id = instituicoes[index].id
    instituicoes.forEach((objInstituicao) => {
        if(objInstituicao.id == id){
            objInstituicao.nome = nome
            atualizarInstituicoes()
            listarInstituicoesSelect()
        }
    })
    alunos.forEach((objAluno) => {
        if(objAluno.idInstituicao == id){
            objAluno.instituicao = nome
            atualizarAlunos()
        }
    })
}

atualizarItemInstituicoes = () => {
    atualizarInstituicoes()
    listarInstituicoesSelect()
}

listarInstituicoesSelect = () => {
    let listarInstituicoes = document.getElementById('select_inst')
    listarInstituicoes.innerHTML = ''
    instituicoes.forEach((obj) => {
        let option = document.createElement('option')
        option.text = obj.nome
        listarInstituicoes.add(option)
    })
}

byId = (a, b) => {
    return a.id > b.id
}

/*

FUNÇÕES DO ALUNO

*/

adicionarAluno = () => {
    let nomeAluno = document.getElementById('input_nome_aluno')
    if(nomeAluno.value == ''){
        alert('Insira o nome do aluno')
    } else {
        if(instituicoes.length == 0){
            alert('Cadastre uma instituição')
        } else {
            let nomeInstituicao = document.getElementById('select_inst').value
            let indexOption = document.getElementById("select_inst").selectedIndex
            instituicoes.forEach((obj, index) => {
                if(indexOption == index){
                    alunos.push({nome: nomeAluno.value, instituicao: nomeInstituicao, id: matricula, idInstituicao: obj.id})
                    matricula++
                    atualizarAlunos()
                    nomeAluno.value = ''
                }
            })
            
        }
    }
}

atualizarAlunos = () => {
    const lista = document.getElementById('lista_aluno')
    lista.innerHTML = ''
    alunos.forEach((obj, index) => {
        lista.appendChild(criarItemAluno(obj, index))
    })
}

criarItemAluno = (obj, index) => {
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.innerHTML = descricaoAluno(obj, index)
    return li
}

descricaoAluno = (obj, index) => {
    return 'Matricula: ' + obj.id +
    ' / Nome: ' + obj.nome +
    ' / Instituicao: ' + obj.instituicao +
    '<button onclick="editarAluno('+index+')" class="btn btn-success ml-3">Editar</button>' +
    '<button onclick="removerAluno('+index+')" class="btn btn-danger ml-3">Remover</button>'
}

removerAluno = (index) => {
    alunos.splice(index, 1)
    atualizarAlunos()
}

editarAluno = (index) => {
    let nome = prompt('Insira o novo nome: ')
    let id = alunos[index].id
    alunos.forEach((objAluno) => {
        if(objAluno.id == id){
            objAluno.nome = nome
            atualizarAlunos()
        }
    })
}