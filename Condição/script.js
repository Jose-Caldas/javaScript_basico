function calcular() {
    let txtv = document.querySelector('input#txtvel')
    let vel = Number(txtv.value)
    let res = document.querySelector('div#res')
    res.innerHTML = ` <p>Sua velocidade foi de ${vel} km/h!</p>`
    if (vel > 60) {
        res.innerHTML += ` <p>Você foi 'MULTADO'! Por excesso de velocidade.</p>`
    } else {
        res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`
    }
}