import React from 'react';
import StopsList from './StopsList';

const Routes = function ({routes, routeSelected, selectRoute, stops}) {

return stops.length === 0 ? (
  <select value={routeSelected} onChange={selectRoute}>
    <option value={''}>Select Your Route</option>
    {
      routes.map(route => {
        return (
        <option
        key={route.id}
        value={route.id}>
        {route.attributes.long_name}
        </option>
        )
      })
    }
  </select>
)
:
<StopsList stops={stops}/>
}

export default Routes;