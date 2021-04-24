const axios = require('axios');

const getRoutes = function(callback) {

  var config = {
    method: 'get',
    url: 'https://api-v3.mbta.com/routes?sort=type&filter%5Btype%5D=0,1'
  };

  axios(config)
  .then(function (response) {
    callback(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });

}

module.exports = {

  getRoutes

}