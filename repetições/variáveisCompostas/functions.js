//Funções são ações executadas assim que são chamadas ou em decorrência de um evento
//Uma função pode receber parâmetros e retornar um resultado

// function somar(a, b) {
//     return a + b

// }
// console.log(somar(10, 1))

// arrow function

// somar = (a, b) => {
//     return a + b
// }

// console.log(somar(5, 4))

// function parImpar(n) {
//     if (n % 2 == 0) {
//         return 'par!'
//     } else {
//         return 'ímpar!'
//     }

// }
// console.log(parImpar(226))

// fatorial

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(6))