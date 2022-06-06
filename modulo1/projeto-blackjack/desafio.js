const iniciarJogo = () => {
  const carta1jogador = comprarCarta();
  const carta2jogador = comprarCarta();
  const carta1computador = comprarCarta();
  const carta2computador = comprarCarta();
  let resultadoComputador = carta1computador.valor + carta2computador.valor;
  let resultadoJogador = carta1jogador.valor + carta2jogador.valor;
  let arrayJogador = [carta1jogador.texto, carta2jogador.texto];
  let arrayComputador = [carta1computador.texto, carta2computador.texto];

  while (
    resultadoJogador < 21 &&
    confirm(
      "Suas cartas são " +
        arrayJogador +
        ". A carta revelada do computador é " +
        carta2computador.texto +
        "." +
        "\n" +
        "Deseja comprar mais uma carta?"
    )
  ) {
    let comprar = comprarCarta();
    resultadoJogador += comprar.valor;
    arrayJogador.push(comprar.texto);
  }
  if (resultadoJogador > 21) {
    alert(`Usuário - Cartas: ${arrayJogador} - Pontuação:  ${resultadoJogador}. 
Computador - Cartas: ${arrayComputador} - Pontuação: ${resultadoComputador}. 
O computador ganhou!`);
    return;
  }

  while (resultadoComputador < 21 && resultadoComputador < resultadoJogador) {
    let comprar1 = comprarCarta();
    resultadoComputador += comprar1.valor;
    arrayComputador.push(comprar1.texto);
  }

  if (
    (resultadoJogador > resultadoComputador && resultadoJogador <= 21) ||
    resultadoComputador > 21
  ) {
    alert(`Usuário - Cartas: ${arrayJogador} - Pontuação:  ${resultadoJogador}. 
 Computador - Cartas: ${arrayComputador} - Pontuação: ${resultadoComputador}. 
 O usuário ganhou!`);
  } else if (
    (resultadoComputador > resultadoJogador && resultadoComputador <= 21) ||
    resultadoJogador > 21
  ) {
    alert(`Usuário - Cartas: ${arrayJogador} - Pontuação:  ${resultadoJogador}. 
 Computador - Cartas: ${arrayComputador} - Pontuação: ${resultadoComputador}. 
 O computador ganhou!`);
  } else {
    alert(`Usuário - Cartas: ${arrayJogador} - Pontuação:  ${resultadoJogador}. 
Computador - Cartas: ${arrayComputador} - Pontuação: ${resultadoComputador}. 
Houve um empate!`);
  }
  return confirm;
};

alert("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  iniciarJogo();
} else {
  alert("O jogo acabou!");
}
