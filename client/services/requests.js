const axios = require('axios');

const getRoutes = function(callback) {

  const config = {
    method: 'get',
    url: 'https://api-v3.mbta.com/routes?sort=type&filter%5Btype%5D=0,1'
  };

  axios(config)
  .then((response) => {
    callback(response.data.data);
  })
  .catch((error) => {
    console.log(error);
  });

}

const getStops = function(routeId, callback) {
  const config = {
    method: 'get',
    url: `https://api-v3.mbta.com/stops?filter%5Broute%5D=${routeId}`,
    headers: { }
  };

  axios(config)
  .then((response) => {
    callback(response.data.data)
  })
  .catch((error) => {
    console.log(error);
  });
}

const getPrediction = function(routeId, stopId, directionId, callback) {

  const config = {
    method: 'get',
    url: `https://api-v3.mbta.com/predictions?sort=arrival_time&filter%5Bdirection_id%5D=${directionId}&filter%5Bstop%5D=${stopId}&filter%5Broute%5D=${routeId}`,
  };

  axios(config)
  .then((response) => {
    callback(response.data.data)
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = {

  getRoutes,
  getStops,
  getPrediction

}