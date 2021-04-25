import React from 'react';

const Prediction = function({ setPrediction, prediction, submitted, vehicleInfo}) {

  const getSeconds = function (arrivalTime){
    const currentDate = new Date;

    let arrivalSeconds = arrivalTime.substring(11)
    arrivalSeconds = arrivalSeconds.split('-');
    arrivalSeconds.pop()
    arrivalSeconds = arrivalSeconds[0];
    arrivalSeconds = arrivalSeconds.split(':')

    let hours = parseInt(arrivalSeconds[0], 10)
    let minutes = parseInt(arrivalSeconds[1], 10)
    let seconds = parseInt(arrivalSeconds[2], 10)

    arrivalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getMinutes();

    let currentSeconds = (hours * 3600) + (minutes * 60) + seconds

    return currentSeconds - arrivalSeconds;
  }

  const predictionDisplay = function () {
debugger;
    let stopId = prediction.relationships.stop.data.id;
    let status = prediction.attributes.status;
    let arrivalTime = prediction.attributes.arrival_time;
    let departureTime = prediction.attributes.departure_time;
    let vehicleStatus = vehicleInfo.attributes.current_status;
    let vehicleStop = vehicleInfo.relationships.stop.data.id;
    let seconds = getSeconds(arrivalTime);

        if (status !== null) {
          return <div>{status}</div>
        }
        if (departureTime === null || seconds < 0) {
          return <div>Just missed the train sorry</div>
        }
        if (seconds <= 90 && vehicleStatus === 'STOPPED_AT' && stopId === vehicleStop) {
          return <div>Boarding</div>
        }
        if (seconds <= 30 ) {
          return <div>Arriving</div>
        }
        if (seconds <= 60) {
          return <div>Approaching</div>
        }
        let minutes = Math.round(seconds/60);
        if (minutes < 20) {
          return <div>{minutes} minutes</div>
        } return <div>20+ minutes</div>
  }

  return !submitted ?
      <form onSubmit={setPrediction}>
      <button type="submit">Submit</button>
      </form>
  :
  <div>
    { prediction.length === 0 ? 'Nothing to see here' : predictionDisplay()
    }
    </div>
}

export default Prediction;