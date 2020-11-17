import fs from 'fs';
import { sensorsCoordinates} from './sensorCoordinates.js';
// import {importData} from './importData.js';
import trilat from 'trilat';



const dummyData = 
    {
        uid: '48:4b:aa:d6:86:25',
        timestamp: 1583216300,
        signalArray: [
            {
                sensor: 4,
                rssi: 60
            },
            {
                sensor: 5,
                rssi: 60,
            },
            {
                sensor: 3,
                rssi: 60
            }
        ]

    }



const getDistanceFromRssi = (rssi) =>{
    const ptx = -18.5;
    const plex = 4;
    const ratio = (ptx-rssi) * 0.1 / plex;
    return Math.pow(10,ratio)
}

const getSensorCoordinates = (position) =>{
    const sensorID = position.sensor;
    const {xCoordinate,yCoordinate} = sensorsCoordinates[sensorID-1];
    return [xCoordinate,yCoordinate]
}

const getInputForTrilateration = (dataObject) =>{
    const input = dataObject.signalArray.map(signal=>{
        const distance = getDistanceFromRssi(-1*signal.rssi);
        const coordinates = getSensorCoordinates(signal)
        return [...coordinates,distance]
    })
    return input
}




const input = getInputForTrilateration(dummyData);
const tri = trilat(input);


console.log(tri)



