let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntTCarne = carnePessoa(duracao) * adultos + (carnePessoa(duracao)/2 * criancas);
    let qntTCerveja = cervejaPessoa(duracao) * adultos;
    let qntTBebidas = bebidasPessoa(duracao) * adultos + (bebidasPessoa(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qntTCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTBebidas/2000)} Pet's 2L de Bebidas</p>`
}

function carnePessoa(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}