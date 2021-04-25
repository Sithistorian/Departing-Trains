import React from 'react';
import Prediction from './Prediction';

const Directions = function ({ directions, directionSelected, setDirection, setPrediction, prediction, submitted, vehicleInfo, directionDestinations}) {

  return directionSelected === '' ?
  (
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
    <div id="directions-display">{`${directions[0]} to ${directionDestinations[0]} or ${directions[1]} to ${directionDestinations[1]}`}</div>
    </>
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

  <div id="directions-display">{`${directions[0]} to ${directionDestinations[0]} or ${directions[1]} to ${directionDestinations[1]}`}</div>
  <Prediction
  submitted={submitted}
  prediction={prediction}
  vehicleInfo={vehicleInfo}
  setPrediction={setPrediction}
  />
  </>
}

export default Directions;