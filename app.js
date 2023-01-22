
//----------------------------------------------
//Comenzamos a utilizar la librería Yargs
//----------------------------------------------


const { crearArchivo } =  require('./helpers/multiplicar.js')
const argv = require('./config/yargs');

console.clear();
console.log(argv);
console.log('base yargs',argv.base);

crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))





//--------------------------------------
//Ejemplos de utilización de información recibida
//por consola sin Yargs, utilizando directamente
//                  process.argv
//----------------------------------------------

// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

// console.log(arg3);
// console.log(base)

// const base = 3;

// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err))