import React from 'react';
import StopsList from './StopsList';

const Routes = function ({routes, routeSelected, selectRouteId, stops, routeDirections, stopSelected, setRouteDirections, selectStopId}) {

return stops.length === 0 ? (
  <select value={routeSelected} onChange={selectRouteId}>
    <option value="">Select Your Route</option>
    {
      routes.map(route => (
        <option
        key={route.id}
        value={route.id}
        >
        {route.attributes.long_name}
        </option>
        ))
    }
  </select>
)
:
<StopsList
stops={stops}
routes={routes}
routeDirections={routeDirections}
setRouteDirections={setRouteDirections}
stopSelected={stopSelected}
selectStopId={selectStopId}/>
}

export default Routes;