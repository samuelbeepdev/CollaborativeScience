let brentwood = require('./brentwood.json').features
let westchester = require('./westchester.json').features

let lasensors = (require('./lasensors.json')).data

let finaldatabrentwood = []
let finaldatawestchester = []

lasensors.forEach(sensor => {
    let sensorname = sensor[3]

    let sensorlocation = [sensor[6], sensor[5]]

    let sensordata = {
        pm: sensor[11],
        tenmin: sensor[12],
        thirtymin: sensor[13],
        sixtymin: sensor[14],
        hour: sensor[15],
        day: sensor[16],
        week: sensor[17],
    }

    brentwood.forEach(sensor => {
        if (sensor.properties.Name == sensorname) {
            finaldatabrentwood.push({
                name: sensorname,
                location: sensorlocation,
                data: sensordata
            })
        }
    })

    westchester.forEach(sensor => {
        if (sensor.properties.Name == sensorname) {
            finaldatawestchester.push({
                name: sensorname,
                location: sensorlocation,
                data: sensordata
            })
        }
    })
})

require('fs').writeFileSync('./finaldatabrentwood.json', JSON.stringify(finaldatabrentwood))
require('fs').writeFileSync('./finaldatawestchester.json', JSON.stringify(finaldatawestchester))