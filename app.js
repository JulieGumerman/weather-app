const geocode = require('./utils/geocode')
const weatherReport = require('./utils/weatherReport')


geocode('Aspen, Colorado', (error, data) => {
    if (error) {
        return console.log("Error yo!!!", error)
    }
    console.log('data', data);

})


weatherReport( 20.9752, 77.8750, (error, reportData) => {
    if (error) {
        return console.log(error)
    }
    // console.log(reportData.location)
    console.log("data", reportData);
 })