function carregar() {
    var msg = document.getElementById('msg')
    var msge = document.getElementById('msge')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = '/imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        msge.innerHTML += 'Bom Dia!'

    } else if (hora >= 12 && hora < 18) {
        img.src = '/imagens/tarde.png'
        document.body.style.background = '#b9846f'
        msge.innerHTML = 'Boa Tarde!'
    } else {
        img.src = '/imagens/noite.png'
        document.body.style.background = '#515454'
        msge.innerHTML = 'Boa Noite!'
    }


}