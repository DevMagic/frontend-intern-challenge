const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/Assets/top5.json')
  .then(function (response) {
    // handle success
    console.log(response.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });