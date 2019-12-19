const geocode = require('./utils/geocode')
const weatherReport = require('./utils/weatherReport')


geocode('Aspen, Colorado', (error, data) => {
    console.log('Error', error);
    console.log('data', data);
    weatherReport(data.longitude, data.latitude, (error, data) => {
        console.log("error", error); 
        console.log("data", data);
    })

})
