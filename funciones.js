
export function suma(a, b, ...numeros) {
    let total = a + b;
    let i=0;
    for (i = 0; i< numeros.length; i++) {
      total += numeros[i];
    }
    return total;
  }

 export function resta(a, b, ...numeros) {
    let total = a - b;
    let i=0;
    for (i = 0; i< numeros.length; i++) {
      total -= numeros[i];
    }
    return total;
  }

 export function multiplicacion(a, b, ...numeros) {
    let total = a * b;
    let i=0;
    for (i = 0; i< numeros.length; i++) {
      total *= numeros[i];
    }
    return total;
  }

 export function division(a, b, ...numeros) {
    let total = a / b;
    let i=0;
    for (i = 0; i< numeros.length; i++) {
      total /= numeros[i];
    }
    return total;
  }