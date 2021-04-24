import React from 'react';

const Prediction = function({ setPrediction, predictions }) {

  return !predictions ? (
      <form onSubmit={setPrediction}>
      <button type="submit">Submit</button>
      </form>
  )
  :
  <div>
    { predictions.length === 0 ? 'Nothing to see here' : predictions[0].attributes.arrival_time
    }
    </div>
}

export default Prediction;