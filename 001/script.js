//#001 - Calculadora - Criar interface de botões e área de saída do resultado dos cálculos de um número. //

function isNumeroNaN(num1, num2){
    if (isNaN(num1) == true || isNaN(num2) == true){
        return true
    } else {
        return false
    }
}

function isVazio(num1, num2){
    if (num1.length == 0 || num2.length == 0){
        return true
    } else {
        return false
    }
}

function somarNumeros(){
    let n1 = document.getElementById('inputn1').value
    let n2 = document.getElementById('inputn2').value

    if(isNumeroNaN(n1, n2) || isVazio(n1, n2)){
        alert('[ERRO] Verifique se os campos estão corretos e preenchidos e tente novamente!')
        document.getElementById('saidaResultado').innerHTML = ''
    } else {
        total = Number(n1) + Number(n2)
        document.getElementById('saidaResultado').innerHTML = total
    }
}