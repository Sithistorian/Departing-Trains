import React from 'react';

const Routes = function ({routes}) {

return (
  <select>
    <option>Select Your Route</option>
    {
      routes.map(route => {
        return <option key={route.id}>{route.attributes.long_name}</option>
      })
    }
  </select>
)
}

export default Routes;