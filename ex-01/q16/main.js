parOuImpar = () => {
    let v1 = document.getElementById('input_v1').value
    if(v1%2==0){
        document.getElementById('resultado').value = 'Par'
    } else 
    document.getElementById('resultado').value = 'Ímpar'
}