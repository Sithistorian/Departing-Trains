import React from 'react';
import Prediction from './Prediction';

const Directions = function ({ directions, directionSelected, setDirection, setPrediction, prediction, getVehicleInfo }) {

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
  <Prediction setPrediction={setPrediction} prediction={prediction} getVehicleInfo={getVehicleInfo}/>
}

export default Directions;