const geocode = require('./utils/geocode')
const weatherReport = require('./utils/weatherReport')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
}

geocode(address, (error, data) => {
    if (error) {
        return console.log("Error yo!!!", error)
    }
    console.log('data', data);
    
    weatherReport(data.latitude, data.longitude, data.place_name, (error, reportData) => {
        if (error) {
            return console.log(error)
        }
        console.log("DATA PLACE NAME", data.place_name)
        // console.log("data", reportData);
        // console.log("location", reportData.place_name)
    })


})


