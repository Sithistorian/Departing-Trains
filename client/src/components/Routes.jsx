import React from 'react';
import StopsList from './StopsList';

const Routes = function ({ routes, routeSelected, setRouteInfo, stops, routeDirections, stopSelected, setStopId, directionSelected, setDirection, setPrediction, prediction, submitted, vehicleInfo, directionDestinations }) {

return stops.length === 0 ? (
  <select value={routeSelected} onChange={setRouteInfo}>
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
submitted={submitted}
setStopId={setStopId}
prediction={prediction}
vehicleInfo={vehicleInfo}
setDirection={setDirection}
stopSelected={stopSelected}
setPrediction={setPrediction}
routeDirections={routeDirections}
directionSelected={directionSelected}
directionDestinations={directionDestinations}
/>
}

export default Routes;