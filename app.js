//requireds

const argv = require('./config/yargs').argv;
var colors = require('colors');

//const fs = require('express'); no existe en la documentacion de node, paquete no nativo
//const fs = require('./fs');  archivos creados por el programor

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}




//console.log(process.argv);
//let argv2 = process.argv;





//let parametro = argv[2];
//let base = parametro.split('=')[1]