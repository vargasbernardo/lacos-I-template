// PRATICA GUIADA I
//  while loop
const funcaoSomaNumeros = () => {
    let numero = Number(prompt('digite seu numero'))
    let soma = 0
    while (numero > 0) {
        soma = soma + numero
        numero = Number(prompt('digite seu numero'))
        console.log(`O numero eh ${numero} `)

        
    }
    console.log(`a soma dos numeros eh ${soma}`)
}
// funcaoSomaNumeros()

// for loop
const contarNumerosUsuario = () => {
    let numero = Number(prompt('digite um numero'))

    for (let i = 0; i <= numero; i++) {
        console.log(i)
    }
    console.log('OUT OF THE LOOP');

}
// contarNumerosUsuario()

// for com array
let arr = ['mamao', 'pera', 'uva', 'manga', 'banana']
let arr2 = [12, 24, 48, 72, 144, 288, -1000]
const imprimirMsgArray = (array) => {
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        console.log(`o elemento de indice ${i} eh ${array[i]}`)
    }
}
// imprimirMsgArray(arr2)

// EXERCICIOS DE FIXACAO
// exercicio 1
const liberarAcesso = () => {
    let perguntaAoUsuario = prompt('Qual o tipo do usuario?').toLowerCase()

    while (perguntaAoUsuario !== 'a') {
        console.log('Acesso negado')
        perguntaAoUsuario = prompt('Qual o tipo do usuario?').toLowerCase()

    }
    
    console.log('Bem vindo admin!')
}
// liberarAcesso()

// exercicio 2
const tabuadaDoDois = () => {
    
    for (i = 1; i <= 10; i++) {
        console.log(`2 x ${i} = ${i * 2}`)
    }
}
// tabuadaDoDois() 

// exercicio 3
let arrStr = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

const imprimeCaixaAlta = (array) => {
    for (i = 0; i < array.length; i++) {
        console.log(array[i].toUpperCase())
    }
}
// imprimeCaixaAlta(arrStr)

