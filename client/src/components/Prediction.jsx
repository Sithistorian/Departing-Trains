import React from 'react';

const Prediction = function({ setPrediction, prediction, submitted, vehicleInfo}) {

  const getSeconds = function (arrivalTime){
    const arrival = new Date(arrivalTime);
    const currentDate = new Date;

    let hours = arrival.getHours();
    let minutes = arrival.getMinutes();
    let seconds = arrival.getSeconds();

    const arrivalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();

    const currentSeconds = (hours * 3600) + (minutes * 60) + seconds

    return arrivalSeconds - currentSeconds;
  }

  const predictionDisplay = function () {

    let stopId = prediction.relationships.stop.data.id;
    let status = prediction.attributes.status;
    let arrivalTime = prediction.attributes.arrival_time;
    let departureTime = prediction.attributes.departure_time;
    let vehicleStatus = vehicleInfo.attributes.current_status;
    let vehicleStop = vehicleInfo.relationships.stop.data.id;
    let seconds = arrivalTime === null ? getSeconds(departureTime) : getSeconds(arrivalTime);
    let minutes = Math.round(seconds/60);
    console.log(getSeconds(arrivalTime), 'seconds:', seconds, 'minutes:', minutes)

    if (status !== null) {
          return <div>{status}</div>
        }
        if (departureTime === null) {
          return <div>Sorry this is the last stop in that direction</div>
        }
        if (seconds < 0) {
          return <div>Oh you missed your ride!</div>
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
    { prediction.length === 0 || vehicleInfo.length === 0 ? 'Nothing to see here' : predictionDisplay()
    }
    </div>
}

export default Prediction;