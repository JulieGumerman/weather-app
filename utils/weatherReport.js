const request = require('request');

const weatherReport = (latitude, longitude, place) => {
    const url = `https://api.darksky.net/forecast/183dc487bd7998806b94b2acce62f3c9/${latitude},${longitude}`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            console.log('Cannot connect to weather service', undefined)
        } else if (body.error) {
           console.log('Unable to find location', undefined)
        } else {
            const weather = body.currently
            const summary = body.daily.data[0].summary;
            console.log( `${place}. ${summary} It is currently ${weather.temperature} with a ${weather.precipProbability} % chance of rain`)
        }    
    })

}

module.exports = weatherReport;