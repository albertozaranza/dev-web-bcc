atualizarCpf = () => {
    let cpf = document.getElementById('input_cpf').value
    let novoCpf = document.getElementById('input_novo_cpf')
    if(cpf.length<=11){
        novoCpf.value = mCPF(cpf)
    }
    
}

 mCPF = (cpf) => {
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}