const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f160c1429eaa5f54428937badef77356&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}