import readlineSync from 'readline-sync';
export function grupo(funcion){
    let grupo = [];
    let i = 1;
    let input = 0;
while (true) {
    input = readlineSync.question('Ingrese el operando n'+ i + ' (Ingrese cualquier tecla no numerica para operar) ');

    let valor = Number(input);

    if (isNaN(valor) || valor==0 || valor==undefined) {
        let total = funcion(...grupo);
        return total;
    }else{
        grupo.push(valor);
    }

    i++;
}
}