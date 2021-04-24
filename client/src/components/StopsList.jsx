import React from 'react';

const StopsList = function ({stops, routeDirections, stopSelected, selectStopId}) {

  return routeDirections.length === 0 ?
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
  <div>A New Component</div>
}

export default StopsList;