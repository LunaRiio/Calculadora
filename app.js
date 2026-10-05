function guardarValores(textoComNumeros) {
    let arrayDeTexto = textoComNumeros.split(/[, ]+/);
    let numeros = [];

    for(let i = 0; i < arrayDeTexto.length; i++) {
        numeros.push(Number(arrayDeTexto[i]));
    }
    return numeros;
}
function soma(valores) {
    let total = 0;

    for(let i = 0; i < valores.length; i++) {
        total += valores[i];
    }
    return total;
}
function multiplicação (valores) {
    let produto = 1;
    
    for (let i = 0; i < valores.length; i++) {
        produto *= valores[i];
    }

    return produto;
}
function divisão (valores) {
    let resto = valores[0];
    
    for (let i = 1; i < valores.length; i++) {
        resto /= valores[i];
    }

    return resto;
}

function media (valores) {
    let total = 0

    for (let i = 0; i < valores.length; i++) {
      total += valores[i]
    }
    return total / valores.length;
}

function porcentagem (valores) {
    if(valores.length < 2) {
        return alert('Erro! São necessários dois números, valor base e percentual respectivamente.');
    }
    let valorBase = valores[0];
    let percentual = valores[1];
    return (valorBase * percentual) / 100;

}


function iniciarCalculadora() {
    let operacaoDesejada;
    let operacaoValida = false;
    let operacoesValida = ['soma', 'divisão', 'multiplicação', 'média', 'porcentagem'];

    while (!operacaoValida) {
        operacaoDesejada = prompt('O que deseja fazer? Soma, divisão, multiplicação, média, ou porcentagem?')

        if (operacaoDesejada ===  null) return;

        operacaoDesejada = operacaoDesejada.toLowerCase()
        let ehNumero = operacaoDesejada.trim() != ' ' && !isNaN(operacaoDesejada);
        
        if(ehNumero) {
            alert('Erro! Por favor, diga qual operação deseja realizar.')
        } else if(!operacoesValida.includes(operacaoDesejada)) {
            alert('Insura uma operação válida!')
        } else {
            operacaoValida = true;
        }
    }

    let numerosEscolhidos = prompt('Escolha os números! Para porcentagem digite o valor e depois a taxa.');
    let numerosParaCalcular = guardarValores(numerosEscolhidos)

    switch (operacaoDesejada) {
    case 'soma':
        alert('Resultado da soma: ' + soma(numerosParaCalcular));
        break;
    case 'multiplicação':
        alert('Resultado da multiplicação: ' + multiplicação(numerosParaCalcular));
        break;
    case 'divisão':
        alert('Resultado da divisão: ' + divisão(numerosParaCalcular));
        break;
    case 'média':
        alert('Resultado da média: ' + media(numerosParaCalcular));
        break;
    case 'porcentagem'
        alert('Resultado da porcentagem ' + porcentagem(numerosParaCalcular));
    default:
    ('Insira uma resposta válida!');
        break;
    }

}

iniciarCalculadora()