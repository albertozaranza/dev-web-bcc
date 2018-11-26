verificar = () => {
    let v1 = document.getElementById('input_v1').value
    if (v1.search(/dota/i) != -1){
        alert('Existe')
    }else
        alert('Não existe')
}