/*#015 - Dia, tarde e noite - Crie uma interface com HTML e 
CSS que exibe, de acordo com o sistema, a hora atual. Faça 
com que os elementos da página, como imagem ilustrando 
cada horário e cor, alterem de acordo com o horário especificado.*/

let msgh4 = document.createElement('h4')
msgh4.innerHTML = `Agora são exatamente `

let imgAtual = document.querySelector('img#imgHoraAtual')
let acessoSec = document.querySelector('section')
let corFundo = document.querySelector('body').style

let hora = new Date().getHours()
let min = new Date().getMinutes()
let seg = new Date().getSeconds()

if(hora >= 0 && hora <= 9){
    hora = '0' + hora
}

if(min >= 0 && min <= 9){
    min = '0' + min
}

if(seg >= 0 && seg <= 9){
    seg = '0' + seg
}

if (hora >= 6 && hora <= 12){
    msgh4.innerHTML += `${hora}:${min}:${seg}. Bom dia!`
    corFundo.backgroundImage = 'linear-gradient(to right, blue, turquoise)'
    imgAtual.src = 'img/manha.jpg'
    acessoSec.insertBefore(msgh4, acessoSec.children[0])

} else if (hora >= 13 && hora <= 17){
    msgh4.innerHTML += `${hora}:${min}:${seg}. Boa tarde!`
    corFundo.backgroundImage = 'linear-gradient(to right, yellow, orange)'
    imgAtual.src = 'img/tarde.jpg'
    acessoSec.insertBefore(msgh4, acessoSec.children[0])

} else if (hora >= 18 && hora <= 23){
    msgh4.innerHTML += `${hora}:${min}:${seg}. Boa noite!`
    imgAtual.src = 'img/noite.jpeg'
    corFundo.backgroundImage = 'linear-gradient(to right, darkblue, darkcyan)'
    acessoSec.insertBefore(msgh4, acessoSec.children[0])

}

/*O método elemento.insertBefore(item, elemento.children[]) insere, no 
elemento selecionado, um item 
e sua posição. Cada posição está alocada 
em índices dentro de uma Array e são 
acessadas através da propriedade 
children. 'item' aparecerá imediatamente antes 
do elemento informado no índice.*/