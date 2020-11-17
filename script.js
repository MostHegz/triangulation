// const fetchPlotData = async () =>{
//   const resp = await fetch('http://localhost:3000/');
//   const {xValues,yValues,zValues} = await resp.json();
//   return {xValues,yValues,zValues} 
// }


import {makeDataMap} from './makeDataMap.js';
const dummyData = [
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

  },
  {
      uid: '68:c4:4d:05:f8:18',
      timestamp: 1583216300,
      signalArray: [
          {
              sensor: 1,
              rssi: 87
          },
          {
              sensor: 5,
              rssi: 70,
          },
          {
              sensor: 2,
              rssi: 87
          }
      ]

  },
  {
      uid: 'e8:50:8b:d2:18:97',
      timestamp: 1583216300,
      signalArray: [
          {
              sensor: 4,
              rssi: 70
          },
          {
              sensor: 5,
              rssi: 70,
          },
          {
              sensor: 6,
              rssi: 70
          }
      ]

  },
  {
      uid: '48:4b:aa:d6:86:25',
      timestamp: 1583216300,
      signalArray: [
          {
              sensor: 2,
              rssi: 80
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

  },
  {
      uid: '48:4b:aa:d6:86:25',
      timestamp: 1583216300,
      signalArray: [
          {
              sensor: 1,
              rssi: 60
          },
          {
              sensor: 5,
              rssi: 80,
          },
          {
              sensor: 2,
              rssi: 60
          }
      ]

  },
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
              rssi: 80
          }
      ]

  },
  {
      uid: '48:4b:aa:d6:86:25',
      timestamp: 1583216300,
      signalArray: [
          {
              sensor: 4,
              rssi: 50
          },
          {
              sensor: 6,
              rssi: 80,
          },
          {
              sensor: 3,
              rssi: 80
          }
      ]

  },

]

console.log(dummyData)
const {xValues, yValues, zValues} = makeDataMap(70,50,dummyData)
var colorscaleValue = [
  [0, '#3D9970'],
  [1, '#001f3f']
];
// const {xValues,yValues,zValues} = fetchPlotData();
var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
  colorscale: colorscaleValue,
  showscale: false
}];

var layout = {
  title: 'Annotated Heatmap',
  annotations: [],
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

for ( var i = 0; i < yValues.length; i++ ) {
  for ( var j = 0; j < xValues.length; j++ ) {
    var currentValue = zValues[i][j];
    if (currentValue != 0.0) {
      var textColor = 'white';
    }else{
      var textColor = 'black';
    }
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(50, 171, 96)'
      },
      showarrow: false,
      font: {
        color: textColor
      }
    };
    layout.annotations.push(result);
  }
}

Plotly.newPlot('myDiv', data, layout);