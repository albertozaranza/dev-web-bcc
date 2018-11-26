verificar = () => {
    let rd = Math.floor(Math.random()*3+1)
    let num = document.getElementById('v1').value
    if (rd == num) {
        alert('São iguais: ' + 'rd: ' + rd + ' num: ' + num)    
    }else{
        alert('São diferentes ' + 'rd: ' + rd + ' num: ' + num)
    }
}