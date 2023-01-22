
const fs = require('fs');
const colors = require('colors');

colors.enable();
//----------------------------------------------
//-------------EJEMPLO CON PROMISE----------
//----------------------------------------------

const crearArchivo = ( base = 5, list = false ) =>{

    return promise = 
    new Promise ((resolve, reject)=>{

        if(list){
            console.log('==========================='.cyan);
            console.log(`     TABLA DEL ${base}     `.white);
            console.log('==========================='.cyan);    
        }

        let salida = '';

        for(var i = 1; i <= 10; i++){
            salida += colors.blue(`${base} ${'x'.white} ${i} ${'='.white} ${base * i}\n`);
        }

        (list) ? console.log(salida) : "";

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            
        resolve(`tabla-${base}.txt creado desde Promise`);
    });
}


//----------------------------------------------
//-------------EJEMPLO CON ASYNC-AWAIT----------
//----------------------------------------------


// const crearArchivo = async ( base = 5 ) =>{

//     try{
//         // function multiplicar( num ){

//         console.log('===========================');
//         console.log(`     TABLA DEL ${base}     `);
//         console.log('===========================');

//         let salida = '';
        
//         for(var i = 1; i <= 10; i++){
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         console.log(salida)
//         // }

//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//         return `tabla-${base}.txt creado desde Promise`;
//     }
//     catch(err){
//         throw err;
//     }

// }



module.exports = {
    crearArchivo
}