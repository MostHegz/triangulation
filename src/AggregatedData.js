export class AggregatedData {
    constructor(sensor,inputData){
        this.sensor = sensor;
        this.recordsArray = this._aggregateData(inputData);
    }
    
    _aggregateData(data){
        const aggData = data.map(item => {
            return ({
                uid: item[1],
                rssi: item[2],
                timestamp: item[0]
            })
        })
        return aggData;
    }
}

