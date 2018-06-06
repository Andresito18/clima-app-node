const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=0c49e131698b01d1c1a3d8b381743643`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}