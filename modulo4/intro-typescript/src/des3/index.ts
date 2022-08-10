function reverteArray(array: string): string {
    const splitString: string[] = array.split("");
    const inversedArray: string[] = splitString.reverse();
    const joinstring: string = inversedArray.join("");
    return joinstring;
  }
  console.log(reverteArray("aleluia"));