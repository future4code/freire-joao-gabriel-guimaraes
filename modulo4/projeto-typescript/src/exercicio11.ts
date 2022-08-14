function numerosRomanos(data: number) {
    let romanos = ''
    if(data >= 1000) {
        data -= 1000
        romanos += 'M'
      }
      if(data >= 900) {
        data -= 900
        romanos+= 'CM'
      }
      if(data >= 500) {
        data -= 500
        romanos += 'D'
      }
      if(data >= 400) {
        data-= 400
        romanos += 'CD'
      }
      if(data >= 100) {
        data -= 100
        romanos += 'C'
      }
      if(data >= 90) {
        data -= 90
        romanos += 'XC'
      }
      if(data >= 50) {
        data -= 50
        romanos += 'L'
      }
      if(data >= 40) {
        data-= 40
        romanos += 'XL'
      }
      if(data >= 10) {
        data-= 10
        romanos += 'X'
      }
      if(data >= 9) {
        data -=9
        romanos += 'IX'
      }
      if(data >= 5) {
        data -= 5
        romanos+= 'V'
      }
      if(data >= 4) {
        data -= 4
        romanos += 'IV'
      }
      if(data >= 1) {
        data -= 1
        romanos += 'I'
      }
return romanos
}

console.log(numerosRomanos(1999))



