import _ from 'lodash';
import {makeDataMap} from './makeDataMap.js';
import {dummyData} from './dummyData.js';
const {xValues, yValues, zValues} = makeDataMap(70,50,dummyData)

var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
  // colorscale: colorscaleValue,
  showscale: true
}];

var layout = {
  title: 'Heatmap',
  // annotations: [],
  xaxis: {
    ticks: '',
    side: 'top'
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
    width: 700,
    height: 700,
    autosize: false
  }
};

Plotly.newPlot('myDiv', data, layout);