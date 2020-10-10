let horaAtual = new Date()
let horaDoDia = horaAtual.getHours()
console.log(`Agora são ${horaDoDia} horas`)
if (horaDoDia <= 12) {
    console.log('Bom dia!')

} else if (horaDoDia < 18) {
    console.log('Boa Tarde!')

} else {
    console.log('Boa Noite!')
}