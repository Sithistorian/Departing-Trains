import React from 'react';

const Routes = function ({routes, routeSelected, selectRoute}) {

return (
  <select value={routeSelected} onChange={selectRoute}>
    <option value={''}>Select Your Route</option>
    {
      routes.map(route => {
        return <option
        key={route.id}
        value={route.id}>
        {route.attributes.long_name}
        </option>
      })
    }
  </select>
)
}

export default Routes;