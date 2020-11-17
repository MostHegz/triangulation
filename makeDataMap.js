import express from 'express';
import { sensorsCoordinates} from './sensorCoordinates.js';
// import {importData} from './importData.js';
import trilat from 'trilat';
import {dummyData} from './dummyData.js';

// const app = express();

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

const makeCoordinateArr = (startValue, stopValue, cardinality) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
      arr.push(startValue + (step * i));
    }
    return arr;
}

const makeZValues =(x,y) =>{
    const zeroArray = [];
    for (let index = 0; index < x.length; index++) {
        const singleDimensionArray = [];
        for (let index = 0; index < y.length; index++) {
            singleDimensionArray.push(0);
        }
        zeroArray.push(singleDimensionArray)
    }
    return zeroArray;
}


export const makeDataMap = (x,y,data) =>{
    const xValues = makeCoordinateArr(1,x,x);
    const yValues = makeCoordinateArr(1,y,y);
    const zValues = makeZValues(xValues,yValues);
    for (const element of data) {
        const trilaterationInput = getInputForTrilateration(element);
        const [xCoordinate,yCoordinate] = trilat(trilaterationInput);
        const [xIndex,yIndex] = [Math.round(xCoordinate),Math.round(yCoordinate)];
        zValues[xIndex][yIndex]++;
    }
    return {xValues, yValues, zValues};
}

// export const {xValues, yValues, zValues} = makeDataMap(70,50,dummyData);

// app.get('/',(req,res) => {
//     const plotValues = makeDataMap(70,50,dummyData);
//     res.send(plotValues)
// })

// app.listen(3000);


 