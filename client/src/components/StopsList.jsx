import React from 'react';
import Directions from './Directions';

const StopsList = function ({stops, routeDirections, stopSelected, selectStopId}) {

  return stopSelected === '' ?
  (
  <select onChange={selectStopId} value={stopSelected} >
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
  <Directions directions={routeDirections}/>
}

export default StopsList;