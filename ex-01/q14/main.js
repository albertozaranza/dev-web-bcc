calcular = () => {
    let v1 = document.getElementById('input_v1').value
    let v2 = document.getElementById('input_v2').value
    document.getElementById('resultado').value = Math.pow(parseInt(v1), parseInt(v2))
}