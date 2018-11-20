limparCpf = () => {
    let cpf = document.getElementById('input_cpf').value
    let novoCpf = cpf.replace(/[.-]/g, '')
    document.getElementById('input_cpf').value = novoCpf
}