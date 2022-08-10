// -------------------- Exercício 1 ----------------------
function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
console.log(checaTriangulo(1, 2, 3));

import { reverse } from "dns";
// -------------------- Exercício 2 ----------------------

function imprimeTresCoresFavoritas(): void {
  const cor1: string = process.argv[2];
  const cor2: string = process.argv[3];
  const cor3: string = process.argv[4];
  console.log([cor1, cor2, cor3]);
}
imprimeTresCoresFavoritas();

// -------------------- Exercício 3 ----------------------

function checaAnoBissexto(ano: number): void {
  const cond1: boolean = ano % 400 === 0;
  const cond2: boolean = ano % 4 === 0 && ano % 100 !== 0;
  if (cond1 || cond2) {
    return console.log(`${ano} é um ano bissexto!!`);
  }
  return console.log(`${ano} não é um ano bissexto!!`);
}
checaAnoBissexto(2020);

// -------------------- Exercício 4 ----------------------

function comparaDoisNumeros(num1: number, num2: number): number {
  let maiorNumero: number;
  let menorNumero: number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca: number = maiorNumero - menorNumero;

  return diferenca;
}
console.log(comparaDoisNumeros(56, 97));

// -------------------- Exercício 5 ----------------------

function checaRenovacaoRG(
  anoAtual?: number,
  anoNascimento?: number,
  anoEmissao?: number
): string {
  let idade: number = anoAtual - anoNascimento;
  let tempoCarteira: number = anoAtual - anoEmissao;

  if (idade <= 20) {
    return tempoCarteira >= 5
      ? "passou dos 5 anos precisa renovar"
      : "ainda não passou os 5 anos";
  } else if (idade >= 20 || idade <= 50) {
    return tempoCarteira >= 10
      ? "passou dos 10 anos precisa renovar"
      : "ainda não passou os 10 anos";
  } else if (idade > 50) {
    return tempoCarteira >= 15
      ? "passou dos 15 anos precisa renovar"
      : "ainda não passou os 15 anos";
  } else {
    return "error";
  }
}

console.log(checaRenovacaoRG(2022, 1999, 2018));

// -------------------- Desafío 1 ----------------------

function operacoesComDoisNum(num1: number, num2: number): void {
  const soma: number = num1 + num2;
  const sub: number = num1 - num2;
  const mult: number = num1 * num2;
  let maiorNum: number = num1;
  if (num1 < num2) {
    maiorNum = num2;
  }
  console.log(
    "soma:",
    soma,
    ",",
    "subtração:",
    sub,
    ",",
    "multiplicação:",
    mult,
    ",",
    "maior número:",
    maiorNum
  );
}
operacoesComDoisNum(2, 6);

// -------------------- Desafío 2 ----------------------

function dnaToRna(dna: string): string {
  const dna1: string = dna
    .replace(/A/gi, "U")
    .replace(/T/gi, "A")
    .replace(/C/gi, "X")
    .replace(/G/gi, "C")
    .replace(/X/gi, "G");
  return dna1;
}
console.log(dnaToRna("ATT GCT GCG CAT TAA CGA CGC GTA"));

// -------------------- Desafío 3 ----------------------

function reverteArray(array: string): string {
  const splitString: string[] = array.split("");
  const inversedArray: string[] = splitString.reverse();
  const joinstring: string = inversedArray.join("");
  return joinstring;
}
console.log(reverteArray("aleluia"));

// -------------------- Desafío 4 ----------------------

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
