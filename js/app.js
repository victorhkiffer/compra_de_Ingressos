//let titulo = document.querySelector('h1');
//titulo.textContent = 'Alterando o Título com o textContent';

//let alterandoPista = document.querySelector('li');
//alterandoPista.textContent = 'Pista Premiun';


//let num1 = 10;
//let num2 = 40;
//let resultado = num1 + num2;
//console.log(`Você sabia que soma de ${num1} + ${num2} é igual a ${resultado} ? ;)`);

//let texto = 'Você ; sabia que ; o sabiá ; sabia assuviá?';
//let frases = texto.split(';');
//console.log(frases);

//let numeros = '1 , 2 , 3 , 4 , 5'
//let separados = numeros.split(',');
//console.log(separados);

// --------------------------------------------------------------------------------------------------------------------------

function ingresso() {
    let cadeiraIn = document.getElementById ('qtd-inferior');
    let cadeiraSup = document.getElementById ('qtd-superior');
    let pista = document.getElementById ('qtd-pista');

    let tipoIngresso = document.getElementById ('tipo-ingresso').value;
    let quantidadeEscolhida = parseInt(document.getElementById ('qtd').value);

        // Verificação do input
        if (isNaN(quantidadeEscolhida) || quantidadeEscolhida <= 0) {
            alert('Por favor, insira uma quantidade válida!');
            return;
        }


    //verificações
    if (tipoIngresso === 'inferior') {
        let quantidadeDisponivel = parseInt(cadeiraIn.innerText.trim());
        if (quantidadeEscolhida <= quantidadeDisponivel) {
            cadeiraIn.innerText = quantidadeDisponivel - quantidadeEscolhida;
            alert('Compra realizada com sucesso!');
        } else {
            alert('Quantidade indisponível para cadeira inferior!');
        }

    } else if (tipoIngresso === 'superior') {
        let quantidadeDisponivel = parseInt(cadeiraSup.innerText.trim());
        if (quantidadeEscolhida <= quantidadeDisponivel) {
            cadeiraSup.innerText = quantidadeDisponivel - quantidadeEscolhida;
            alert('Compra realizada com sucesso!');
        } else {
            alert('Quantidade indisponível para cadeira superior!');
        }

    } else if (tipoIngresso === 'pista') {
        let quantidadeDisponivel = parseInt(pista.innerText.trim());
        if (quantidadeEscolhida <= quantidadeDisponivel) {
            pista.innerText = quantidadeDisponivel - quantidadeEscolhida;
            alert('Compra realizada com sucesso!');
        } else {
            alert('Quantidade indisponível para a pista!');
        }

    }


}