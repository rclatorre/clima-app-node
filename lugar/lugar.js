const axios = require('axios');

const getLugarLatLng = async(direccion_bus) => {

    const encodedUlr = encodeURI(direccion_bus);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr}`,
        headers: { 'x-rapidapi-key': '95db7a615bmsh87678703391e636p167c7cjsn4df8dc17fba5' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion_bus}`);
    }

    const data = resp.data.Results[0]; // Toma el primer resultado
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}