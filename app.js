
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').option({
    direccion: {
        alias : 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async () => {
    let coors = await lugar.getLugarLatLng(argv.direccion);
    let temp = await clima.getClima( coors.lat, coors.lng);

    return `El clima en ${ coors.direccion } es ${ temp }`;
}

getInfo( argv.direccion )
       .then( mensaje => console.log(mensaje) )
       .catch(e => console.log(e));

