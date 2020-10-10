let num = [4, 5, 2, 3, 9, 8, 1]
console.log(num)

// let pos = num.indexOf(4) //busca o 4 e informa o número do indice que é 0
// console.log(pos)

let pos = num.indexOf(8) // não existe 6 no array, então mostra -1
//console.log(pos)

// para escreve algo na tela ao inves de -1

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}