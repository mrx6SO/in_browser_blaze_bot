'use strict';

let resultados = [];
let baseBetAmount = 10;
let currentBetAmount = baseBetAmount;
let wins = 0;
let losses = 0;
let maxWins = 10;
let consecutiveLosses = 2;
let isPlaying = true;
let keepPlaying = null;
//.place-bet > button:nth-child(1)
let timer = document.querySelector("#roulette-timer");
let timer_finish = timer.childNodes[0].className === 'time-left' ? true ? false : 'progress-bar' : '';

//    if () { 



//  }
//botao_comeco.addEventListener("change", initBet);

var initBet = () => {
		
		let verifica_resultados = JSON.parse(localStorage.getItem(resultados))
		let wins_verificados = verifica_resultados.map(winning => wins)
		let losses_verificados = verifica_resultados.map(losing => losses)
		let botao_comeco = document.querySelector(".place-bet > button:nth-child(1)");
			if (wins_verificados >= 5 || losses_verificados <= 1) { 
					keepPlaying = true; 
                }
				    //botao_comeco.dispatchEvent("change")
				
                    botao_comeco.addEventListener("change", function() {
}

/*if (currentBetAmount > baseBetAmount) { 

        	
        }*/

let checkResults = () => {

    let resultado_giro = document.querySelector(".time-left").textContent;
    if (resultado_giro.includes('Blaze Girou')) {
        resultados.push({ resultado: resultado_giro });
        localStorage.setItem("Resultados", JSON.stringify(resultados));

        // Obter a cor escolhida pelo usuário
        let cor_escolhida = document.querySelector("div#roulette-controller.controller > div.body > div.inputs-wrapper > div.input.side > div.input-wrapper.select").querySelector("div.selected");

        let cor_vencedora = document.querySelector(".wrapper").querySelector("div.tile-wrapper:nth-child(31)").querySelector(".lg-box");

        let cor_vencedora_texto = cor_vencedora.outerHTML.includes("white") ? 'white' : cor_vencedora.outerHTML.includes("black") ? 'black' : cor_vencedora.outerHTML.includes("red") ? 'red' : null;

        let cor_escolhida_texto = cor_escolhida.classList.contains("white") ? 'white' : cor_escolhida.classList.contains("black") ? 'black' : cor_escolhida.classList.contains("red") ? 'red' : null;

        if (cor_vencedora_texto === cor_escolhida_texto) {
            console.log(`Rodada ganha! ${wins}`);
            wins++;
            consecutiveLosses = 0;
            keepPlaying = true;

        }
        // Verificar o status da aposta atual
        if (cor_vencedora_texto === 'white') {
            if (cor_escolhida.classList.contains('white')) {
                wins++;
                consecutiveLosses = 0;
                console.log(`Ganhou! Vitórias consecutivas: ${wins}`);
            } else {
                losses++;
                consecutiveLosses++;
                console.log(`Perdeu! Derrotas consecutivas: ${consecutiveLosses}`);
            }
        }
        else if (cor_vencedora_texto === 'black') {
            if (cor_escolhida.classList.contains('black')) {
                wins++;
                consecutiveLosses = 0;
                console.log(`Ganhou! Vitórias consecutivas: ${wins}`);
            } else {
                losses++;
                consecutiveLosses++;
                console.warn(`Perdeu! Derrotas consecutivas: ${consecutiveLosses}`);
            }
        } else if (cor_vencedora_texto === 'red') {
            if (cor_escolhida.classList.contains('red')) {
                wins++;
                consecutiveLosses = 0;
                console.debug(`Ganhou! Vitórias consecutivas: ${wins}`);
            } else {
                losses++;
                consecutiveLosses++;
                console.debug(`Perdeu! Derrotas consecutivas: ${consecutiveLosses}`);
            }
        }
    }
    // Ajustar a quantidade da aposta
    if (consecutiveLosses >= 2) {
        console.info(`Perdeu ${consecutiveLosses} vezes consecutivas. Parando as apostas.`);
        isPlaying ? 'isPlaying' : keepPlaying ? 'keepPlaying' : null;
    } else if (wins >= maxWins) {
        console.info("Chegou ao número máximo de vitórias. Parando as apostas.");
        isPlaying = false;
    } else {
        currentBetAmount = baseBetAmount * Math.pow(2, losses);
        console.info(`Ajustando a quantidade da aposta para ${currentBetAmount}.`);
    }
}