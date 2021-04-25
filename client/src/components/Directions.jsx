import React from 'react';
import Prediction from './Prediction';

const Directions = function ({ directions, directionSelected, setDirection, setPrediction, prediction, submitted, vehicleInfo }) {

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
  <>
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
  <Prediction
  submitted={submitted}
  prediction={prediction}
  vehicleInfo={vehicleInfo}
  setPrediction={setPrediction}
  />
  </>
}

export default Directions;