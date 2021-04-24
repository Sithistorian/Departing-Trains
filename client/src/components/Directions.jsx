import React from 'react';

const Directions = function ({ directions, directionSelected, setDirection }) {

  return directionSelected === '' ?
  (
    <select value={directionSelected} onChange={setDirection}>
      <option>Select Direction</option>
      {
        directions.map(direction => <option
          key={direction}
          value={direction}>
          {direction}</option>)
      }
    </select>
  )
  :
  <div>Time till next train component</div>
}

export default Directions;