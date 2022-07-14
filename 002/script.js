//#007 - Condições - Construa uma interface em HTML que receba o nome e idade do usuário. Devolva a informação 
//na tela estimando o ano em que o usuário nasceu, com as informações que ele colocou antes. É necessário utilizar 
//de um dos recursos do JavaScript que consegue retornar a data exata.

let botaoVerificar = document.getElementById('btnVerif')
botaoVerificar.addEventListener('click', verificarIdade)

let divMsg = document.createElement('div')
divMsg.setAttribute('id', 'pSaidaResult')

function isNome(n){
    if (n.length == 0 || isNaN(n) == false){
        return true
    } else {
        return false
    }
}

function isIdade(i){
    if (i.length == 0 || isNaN(i) == true){
        return true
    } else {
        return false
    }
}

function verificarIdade(){
    let nome = document.getElementById('inputNome').value
    let idade = document.getElementById('inputIdade').value

    if(isNome(nome) || isIdade(idade)){
        alert(`[ERRO] Verifique os campos e tente novamente.`)
    } else {
        let anoAtual = new Date().getFullYear()
        anoNasc = anoAtual - idade

        divMsg.innerHTML += `<p>Olá ${nome}!</p>`
        divMsg.innerHTML += `<p>Você tem ${idade} anos de idade.</p>`
        divMsg.innerHTML += `<p>Pelos cálculos, você nasceu em meados de ${anoNasc}/${anoNasc - 1}.</p>`

        divMsg.style.display = 'block'
        document.body.getElementsByTagName('main')[0].appendChild(divMsg)
    }
}

function limparTela(){
    divMsg.style.display = 'none'
    divMsg.innerHTML = ''
}