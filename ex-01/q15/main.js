somar = () => {
    let v1 = document.getElementById('input_v1').value.length
    let v2 = document.getElementById('input_v2').value.length
    if(v1 == 0 || v2 == 0){
        alert('Valores inválidos')
        document.getElementById('resultado').value = 0
    } else
        document.getElementById('resultado').value = parseInt(v1) + parseInt(v2)
}