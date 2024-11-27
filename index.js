"use strict";
import readlineSync from 'readline-sync';
import * as funciones from './funciones.js';
import * as promptLoop from './prompt.js';

    let loop = true;
    let menu = 0;
    let i = 0;
    do{
        menu = Number(readlineSync.question('Ingrese la funcion deseada: \n1- Suma\n2- Resta\n3- Multiplicacion\n4- Division\n5- Cerrar Programa\n...'));
        switch(menu){
            case 1:
                console.log(promptLoop.grupo(funciones.suma));
                break;
            case 2:
                console.log(promptLoop.grupo(funciones.resta));
                break;
            case 3:
                console.log(promptLoop.grupo(funciones.multiplicacion));
                break;
            case 4:
                console.log(promptLoop.grupo(funciones.division));
                break;
              case 5:
                  console.log('cerrando programa...');
                 loop = false;
                break;
            default:
                console.log('Funcion no reconocida');
                break;
        }
        
    }while(loop)