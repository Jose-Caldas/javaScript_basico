let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function numero_adicionado(n){
if(Number(n >= 1 && Number(n <=100))){
    return true
}else{
    return false
}
}
function in_lista(n, l){
if(l.indexOf(Number(n))!= -1){
    return true
}else{
    return false
}

}

//o sinal ! quer dizer não em JS

function adicionar(){
if(numero_adicionado(num.value) && !in_lista(num.value, valores)){
valores.push(Number(num.value))
let item = document.createElement('option')
item.text = `Valor ${num.value} adicionado`
lista.appendChild(item)
res.innerHTML = 'Novo(s) número(s) acrescentado(s), click em finalizar para analizar!'
}else{
    alert('Valor inválido ou já encontrado na lista!')
}
//para apagar caixa de texto automaticamente

num.value = ''
num.focus()

}

function finalizar(){

//verificar a quantidade de elementos

if(valores.length == 0){
    alert('Adicione pelo menos um valor antes de finalizar!')
}else{
let total = valores.length

//verificar o maior e menor número digitado/soma

let maior = valores[0]
let menor = valores[0]

let soma = 0
let media = 0

for(let pos in valores){
    soma += valores[pos]
    media = soma/total
    if(valores[pos] > maior){
        maior = valores[pos]
    }if (valores[pos] < menor){
        menor = valores[pos]
    }

    
}

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    
}
}


