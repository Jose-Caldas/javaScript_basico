function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formularioAno = document.getElementById('txtano')
    let res = document.querySelector('div.resultado')

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formularioAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')

            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')

            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi identificado: ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}