function checaAnoBissexto(ano: number): void {
    const cond1: boolean = ano % 400 === 0;
    const cond2: boolean = ano % 4 === 0 && ano % 100 !== 0;
    if (cond1 || cond2) {
      return console.log(`${ano} é um ano bissexto!!`);
    }
    return console.log(`${ano} não é um ano bissexto!!`);
  }
  checaAnoBissexto(2020);
  