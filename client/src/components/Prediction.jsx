import React from 'react';

const Prediction = function({ setPrediction, prediction, getVehicleInfo }) {

  // const getSeconds = function (arrivalTime){
  //   const currentDate = new Date;

  //   let arrivalSeconds = arrivalTime.substring(11)
  //   arrivalSeconds = arrivalSeconds.split('-');
  //   arrivalSeconds.pop()
  //   arrivalSeconds = arrivalSeconds[0];
  //   arrivalSeconds = arrivalSeconds.split(':')

  //   let hours = parseInt(arrivalSeconds[0], 10)
  //   let minutes = parseInt(arrivalSeconds[1], 10)
  //   let seconds = parseInt(arrivalSeconds[2], 10)

  //   arrivalSeconds = (hours * 3600) + (minutes * 60) + seconds;

  //   hours = currentDate.getHours();
  //   minutes = currentDate.getMinutes();
  //   seconds = currentDate.getMinutes();

  //   let currentSeconds = (hours * 3600) + (minutes * 60) + seconds

  //   return currentSeconds - arrivalSeconds;
  // }

  // const predictionDisplay = function () {
  //   if(prediction && prediction.length === 0) {
  //     return <div>There are no departing Vehicles from this Stop</div>
  //   }

  //   let vehicleId = prediction.relationships.vehicle.data.id;
  //   let stopId = prediction.relationships.stop.data.id;
  //   let status = prediction.attributes.status;
  //   let arrivalTime = prediction.attributes.arrival_time;
  //   let departureTime = prediction.attributes.departure_time;
  //   let seconds = getSeconds(arrivalTime);

  //   let display = getVehicleInfo(vehicleId, (response) => {

  //       let vehicleStatus = response.attributes.status;
  //       let vehicleStop = response.relationships.stop.data.id;

  //       if (status !== null) {
  //         return <div>{status}</div>
  //       }
  //       if (departureTime === null || seconds < 0) {
  //         return <div>Just missed the train sorry</div>
  //       }
  //       if (seconds <= 90 && vehicleStatus === 'STOPPED_AT' && stopId === vehicleStop) {
  //         return <div>Boarding</div>
  //       }
  //       if (seconds <= 30 ) {
  //         return <div>Arriving</div>
  //       }
  //       if (seconds <= 60) {
  //         return <div>Approaching</div>
  //       }
  //       let minutes = Math.round(seconds/60);
  //       if (minutes < 20) {
  //         return <div>{minutes} minutes</div>
  //       } return <div>20+ minutes</div>
  //   });
  //   return display;
  // }

  return prediction.length === 0 ?
      <form onSubmit={setPrediction}>
      <button type="submit">Submit</button>
      </form>
  :
  <div>
    { prediction.length === 0 ? 'Nothing to see here' : prediction.attributes.arrival_time
    }
    </div>
}

export default Prediction;