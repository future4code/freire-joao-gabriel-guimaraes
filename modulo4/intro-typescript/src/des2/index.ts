
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