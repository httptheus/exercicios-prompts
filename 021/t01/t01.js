/*#021 - Dado - Crie uma interface web 
que, aleatoriamente, traga um número 
de 1 a 6. Exiba imagens de um dado real de 
acordo com o número tirado.*/

let btnRolar = document.querySelector('#btnRolar')

let imgDado = document.querySelector('#imgDado')

btnRolar.addEventListener('click', rolarDado)

function rolarDado(){
    let numRand
    let numRandAtual
    let maxNum = 6
    let minNum = 1

    numRand = Math.floor(Math.random() * (maxNum - minNum))

    if(numRand == numRandAtual || numRand <= 0){
        numRand = Math.floor(Math.random() * (maxNum - minNum) * 2)
    }

    if(numRand > 6){
        numRand = 6
    }

    imgDado.src = `img/dado${numRand}.png`
}