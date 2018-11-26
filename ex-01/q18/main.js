verificar = () => {
    let v1 = document.getElementById('input_v1').value
    if(v1>=18){
        document.getElementById('resultado').value = 'Maior de idade'
    } else 
    document.getElementById('resultado').value = 'Menor de idade'
}