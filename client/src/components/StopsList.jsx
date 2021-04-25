import React from 'react';
import Directions from './Directions';

const StopsList = function ({stops, routeDirections, stopSelected, setStopId, directionSelected, setDirection, setPrediction, prediction, submitted, vehicleInfo}) {

  return stopSelected === '' ?
  (
  <select onChange={setStopId} value={stopSelected} >
    <option>Select Stop</option>
    {
     stops.map(stop => <option
       key={stop.id}
       value={stop.id}>
        {stop.attributes.name}
        </option>)
    }
  </select>
  )
  :
  <Directions
  submitted={submitted}
  prediction={prediction}
  vehicleInfo={vehicleInfo}
  setDirection={setDirection}
  directions={routeDirections}
  setPrediction={setPrediction}
  directionSelected={directionSelected}
  />
}

export default StopsList;