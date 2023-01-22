const argv = require('yargs')
    .options({
        'b':{
            alias:'base',
            type:'number',
            demandOption:true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l':{
            alias:'list',
            type:'boolean',
            demandOption:true,
            default:false,
            describe: 'Muestra la tabla en la consola'
        }
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return argv.b;
    })
    .argv;

module.exports = argv;