import React from 'react';
import Directions from './Directions';

const StopsList = function ({stops, routeDirections, stopSelected, setStopId, directionSelected, setDirection, setPrediction, prediction}) {

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
  directions={routeDirections}
  directionSelected={directionSelected}
  setDirection={setDirection}
  setPrediction={setPrediction}
  prediction={prediction}/>
}

export default StopsList;