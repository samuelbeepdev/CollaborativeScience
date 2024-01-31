let lasensors = (require('./lasensors.json')).data
let sensorgeojson = [

]

lasensors.forEach(sensor => {
    sensorgeojson.push(
        {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [sensor[6], sensor[5]]
            },
            "properties": {
              "name": sensor[3]
            }
          }
    )
})

console.log(sensorgeojson)

require('fs').writeFileSync('./sensorgeojson.json', JSON.stringify(sensorgeojson))