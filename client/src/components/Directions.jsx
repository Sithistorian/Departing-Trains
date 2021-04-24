import React from 'react';
import Prediction from './Prediction';

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
  <Prediction/>
}

export default Directions;