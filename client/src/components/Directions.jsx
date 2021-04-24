import React from 'react';
import Prediction from './Prediction';

const Directions = function ({ directions, directionSelected, setDirection, setPrediction, prediction }) {

  return directionSelected === '' ?
  (
    <select
    value={directionSelected}
    onChange={setDirection}>
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
  <Prediction setPrediction={setPrediction} predictions={prediction}/>
}

export default Directions;