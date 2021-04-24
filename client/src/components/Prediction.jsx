import React from 'react';

const Prediction = function({ setPrediction, prediction, getVehicleInfo }) {

  //write a function that returns what I want to display

  const compareStops = function (vehicleId, stopId) {
     getVehicleInfo(vehicleId, (response) => {
       const vehiclesCurrentStop = response.relationships.stop.data.id;
       if (vehiclesCurrentStop === stopId) {
         return true;
       } return false;
     })
  }

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

    let vehicleId = prediction.relationships.vehicle.data.id;
    let stopId = prediction.relationships.stop.data.id;
    let status = prediction.attributes.status;
    let arrivalTime = prediction.attributes.arrival_time;
    let departureTime = prediction.attributes.departure_time;
    let seconds = getSeconds(arrivalTime)

    if (status !== null) {
      return <div>{status}</div>
    }
    if (departureTime === null) {
      return <div></div>
    }

    compareStops(vehicleId, stopId)
  }


  return !prediction ? (
      <form onSubmit={setPrediction}>
      <button type="submit">Submit</button>
      </form>
  )
  :
  <div>
    { prediction.length === 0 ? 'Nothing to see here' : prediction.attributes.arrival_time
    }
    </div>
}

export default Prediction;