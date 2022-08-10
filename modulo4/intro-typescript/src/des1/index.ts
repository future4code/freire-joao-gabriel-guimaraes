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