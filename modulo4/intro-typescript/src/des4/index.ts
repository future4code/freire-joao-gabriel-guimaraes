function estudanteOuNao(
    nome: string,
    idade: number,
    ensinoMedio: string,
    curso: string,
    tempoLivre: number
  ): boolean {
    let resultado: boolean = false;
    if (
      (ensinoMedio === "sim" &&
        curso === "noturno" &&
        tempoLivre >= 20 &&
        idade >= 18) ||
      (ensinoMedio === "sim" &&
        curso === "integral" &&
        tempoLivre >= 40 &&
        idade >= 18)
    ) {
      return (resultado = true);
    } else {
      return (resultado = false);
    }
  }
  console.log(estudanteOuNao("joao", 23, "sim", "integral", 35));