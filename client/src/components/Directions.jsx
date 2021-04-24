import React from 'react';

const Directions = function ({ directions }) {

  return (
    <select value="directionSelected" onChange={(e) => {e.preventDefault()}}>
      <option>Select Direction</option>
      {
        directions.map(direction => <option
          key={direction}
          value={direction}>
          {direction}</option>)
      }
    </select>
  )
}

export default Directions;