import React from 'react';

const StopsList = function ({stops, routes, routeDirections, setRouteDirections, stopSelected, selectStopId}) {

  return routeDirections.length === 0 ?
  (
  <select value={stopSelected} onChange={selectStopId}>
    <option>Select your departure stop</option>
    {
     stops.map(stop => {
       return <option
       key={stop.id}
       value={stop.id}>
        {stop.attributes.name}
        </option>
     })
    }
  </select>
  )
  :
  <div>A New Component</div>
}

export default StopsList;