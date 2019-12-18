const request = require('request');

const geocode = (address, callback) => {
    const mapurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoianVsaWVndW1lcm1hbiIsImEiOiJjazRhMXlmMngwYmljM2xvMThidmg2NHdhIn0.h_10wxKJXJaIJFXqtoDfUQ&limit=1`

    request({url: mapurl, json: true}, (error, response) => {
        if (error) {
            callback(`Unable to connect to location services`, undefined)
        } else if (response.body.features.length === 0) {
            callback("We could not find data on your city")
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name
            })            
        }
    })
}

module.exports = geocode;