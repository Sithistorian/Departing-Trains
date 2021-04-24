import React from 'react';
import Directions from './Directions';

const StopsList = function ({stops, routeDirections, stopSelected, setStopId, directionSelected, setDirection}) {

  return stopSelected === '' ?
  (
  <select onChange={setStopId} value={stopSelected} >
    <option>Select your departure stop</option>
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
  setDirection={setDirection}/>
}

export default StopsList;