import fs from 'fs';
import {sensorCoordinates} from './sensorCoordinates.js';
import {importData} from './importData.js';


const sensorData = importData(6);

console.log(sensorData[1])



