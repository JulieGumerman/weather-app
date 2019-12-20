const request = require('request');

const weatherReport = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/183dc487bd7998806b94b2acce62f3c9/${latitude},${longitude}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Cannot connect to weather service', undefined)
        } else if (response.body.error) {
           callback('Unable to find location', undefined)
        } else {
            const weather = response.body.currently
            const summary = response.body.daily.data[0].summary
            callback( `${summary} It is currently ${weather.temperature} with a ${weather.precipProbability} % chance of rain`)
        }    
    })

}

module.exports = weatherReport;