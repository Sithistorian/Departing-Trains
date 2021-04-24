import React from 'react';

const StopsList = function ({stops}) {

  return <select>
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
}

export default StopsList;