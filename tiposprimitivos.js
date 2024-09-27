// nome e idade//
const prompt= require("prompt-sync")()
var nome = prompt("Digite seu nome")
var idade = prompt("Digite sua idade")

console.log('ola meu nome é',nome,'e tenho',idade,'anos')

//nome e cidade//
var nome = (prompt('digite seu nome'))
let cidade = (prompt('digite sua cidade'))

console.log(nome,'é de',cidade)

// soma, divisao, mutiplicaçao, subitraçao//
let numero1 = 12
let numero2 = 6

let soma = numero1 + numero2
let sub = numero1 - numero2
let multi = numero1 * numero2
let div = numero1 / numero2

console.log('soma',soma,'subtração',sub,'multiplicação',multi,'divisão',div)

// area do triangulo//

let base = 5
let altura = 15
let area =((base*altura)/2)

console.log('área do triangulo é', area)

//media dos alunos//
let nota1 = 8
let nota2 = 7
let nota3 = 6
let media = ((nota1 + nota2 + nota3)/3).toFixed(1)

console.log('media das notas é',media)

//desconto//

let produto = 500
let percentual = 0.5

let valordedesconto = produto*(1 - percentual)

console.log('valor do produto é',produto,'o desconto e de 40%,o valor final é', valordedesconto)

// calculo do imc//
let peso = 75
let altura1 = 1.80
let altura2 = 1.80
let imc = (peso/(altura1*altura2)).toFixed(1)

console.log('o calculo do imc é',imc)

//convertendo para Fahrenheit//

let celsius = 40
let Fahrenheit = (( celsius*9/5)+32)

console.log('o valor da conversão é',Fahrenheit)

//converso de moedas//
let real = 200
let dolar = (200/5.48).toFixed(2)

console.log('o valor inicial do real é',real,'o valor convertido para o dolar fica', dolar,'dolar')

//imposto de renda// 

let salario = 3000
let contribuição = 360 
let taxa = 7.5
let calculo = ((taxa*(salario-contribuição))/100).toFixed(2)

console.log(' o salario é',salario,'o calculo feito do imposto de renda é',calculo)

let fim = 'obrigado pela atenção'
console.log(fim)