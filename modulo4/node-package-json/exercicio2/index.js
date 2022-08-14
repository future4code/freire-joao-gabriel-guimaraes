// Exercício 2-a

let operacao = process.argv[2];
let valor1 = Number(process.argv[3]);
let valor2 = Number(process.argv[4]);
let resultado;
switch (operacao) {
  case "add":
    resultado = valor1 + valor2;
    break;
  case "sub":
    resultado = valor1 - valor2;
    break;
  case "mult":
    resultado = valor1 * valor2;
    break;
  case "div":
    resultado = valor1 / valor2;
    break;
  default:
    "hello world!";
}

console.log("Resposta:", resultado);
