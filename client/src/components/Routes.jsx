import React from 'react';
import StopsList from './StopsList';

const Routes = function ({routes, routeSelected, setRouteInfo, stops, routeDirections, stopSelected, setStopId, directionSelected, setDirection, setPrediction, prediction, submitted, vehicleInfo}) {

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
routeDirections={routeDirections}
stopSelected={stopSelected}
setStopId={setStopId}
directionSelected={directionSelected}
setDirection={setDirection}
setPrediction={setPrediction}
prediction={prediction}
submitted={submitted}
vehicleInfo={vehicleInfo}/>
}

export default Routes;