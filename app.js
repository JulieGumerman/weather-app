const geocode = require('./utils/geocode')
const weatherReport = require('./utils/weatherReport')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log("Error yo!!!", error)
        }
        console.log('data', location);
        
        weatherReport(latitude, longitude, (error, reportData) => {
            if (error) {
                return console.log(error)
            } else {
                console.log("DATA PLACE NAME", reportData.place_name)
            }
            
            // console.log("data", reportData);
            // console.log("location", reportData.place_name)
        })
    })    
}




