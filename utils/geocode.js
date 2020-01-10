const request = require('request');

const geocode = (address) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoianVsaWVndW1lcm1hbiIsImEiOiJjazRhMXlmMngwYmljM2xvMThidmg2NHdhIn0.h_10wxKJXJaIJFXqtoDfUQ&limit=1`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            console.log(`Unable to connect to location services`, undefined)
        } else if (body.features.length === 0) {
            console.log("We could not find data on your city")
        } else {
            console.log(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place_name: body.features[0].place_name
            })            
        }
    })
}

module.exports = geocode;