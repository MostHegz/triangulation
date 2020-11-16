import fs from 'fs';
import { convertData } from './sensorDataConversion.js';
import {AggregatedData} from './AggregatedData.js';

export const importData =(filesNumber) =>{
    let sensorData =[];
    for (let index = 0; index < filesNumber; index++) {
        const currentfile = fs.readFileSync(`./Data/Sensor ${index+1}.txt`,'utf8');
        const convertedData = convertData(currentfile,`|`);
        let aggregated = new AggregatedData(index+1,convertedData)
        sensorData.push(aggregated)
    }
    return sensorData;
}

