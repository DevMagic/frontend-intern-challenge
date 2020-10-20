const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/home/wagner_nascimento/frontend-intern-challenge/project/public/script/top5.js')
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