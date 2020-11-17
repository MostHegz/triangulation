# Triangulation

## Description 
This is a triangulation algorithm using a dummy data set of 12 reading at the same timestamp. The data-set contains user addresses and RSSI.

## Assumptions
This implementation assume that 
```
rssi at 1 meter = -18.5 dBm , Path loss parameter = 4
```
both of these can be changed in ``` /src/makeDataMap.js```in the ```getDistanceFromRssi()``` function

## Changing Room Dimension
This can be done by changing the arguments of ```makeDataPlot(Length,Width,data-set)``` in ```src/index.js```

