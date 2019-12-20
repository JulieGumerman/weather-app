const geocode = require('./utils/geocode')
const weatherReport = require('./utils/weatherReport')


geocode('Aspen, Colorado', (error, data) => {
    if (error) {
        return console.log("Error yo!!!", error)
    }
    console.log('data', data);

    // weatherReport(data.longitude, data.latitude, (error, reportData) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(reportData.location)
    //     console.log("data", reportData);
    // })

})
