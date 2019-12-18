const request = require('request');
const chalk = require('chalk');

const weatherReport = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/183dc487bd7998806b94b2acce62f3c9/${latitude},${longitude}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Cannot connect to weather service', undefined)
        } else if (response.body.error) {
           console.log('Unable to find location', undefined)
        } else {
            const weather = response.body.currently
            const summary = response.body.daily.data[0].summary
            console.log( `${summary} It is currently ${weather.temperature} with a ${weather.precipProbability} % chance of rain`)
        }    
    })

}

module.exports = weatherReport;