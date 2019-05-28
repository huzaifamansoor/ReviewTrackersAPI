const request = require('request');

const username = 'haroon.ibrahim@ibex.co'
const password = 'IbexRTRock$$2019';
  
  const options = {
    url: 'https://api.reviewtrackers.com/auth',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.rtx.location.v2.hal+json;charset=utf-8',
      'Authorization': 'Basic ' + new Buffer.from(username + ':' + password).toString('base64')
    }  
  }

  exports.post = async (req,res,next) => {
    request(options,(error, response, body) => {
        if (!error && response.statusCode) {  
            const response = JSON.parse(body)
            console.log(response.token)   
            return res.status(200).json(JSON.parse(response));  
        }
      });    
  };
  