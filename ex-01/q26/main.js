verificar = () => {
    let date = new Date()
    let data = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    document.getElementById('data').innerHTML = data
    setTimeout('verificar()', 1000)
}

/*
    format = (string, size) => {
        while(string.length < size){
            string = '0' + string
        }
        return string
    }
*/