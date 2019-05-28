
const request = require('request');

const username =    'haroon.ibrahim@ibex.co'
const token = 'T9QwHiFLS65GEcSJJW-tfLMX6xU=';
const account_id = '5c61e670bb76cb1fab3181ce';

  const getOptions = {
    url: `https://api.reviewtrackers.com/reviews?account_id=${account_id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.rtx.location.v2.hal+json;charset=utf-8',
      'Authorization': 'Basic ' + new Buffer.from(username + ':' + token).toString('base64')
    }  
  }

  const getByIdOptions = {
    url: `https://api.reviewtrackers.com/reviews?account_id=${account_id},location_id=`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.rtx.location.v2.hal+json;charset=utf-8',
      'Authorization': 'Basic ' + new Buffer.from(username + ':' + token).toString('base64')
    }
  }

  exports.get = async (req,res,next) => {
    request(getOptions,(error, response, body) => {
        if (!error && response.statusCode) {     
            return res.status(200).json(JSON.parse(body));  
        }
      });    
  };

  exports.getById = async (req,res,next) => {
    
    const id = req.params.id;
    getByIdOptions.url += id;
    request(getByIdOptions,(error, response, body) => {
        if (!error && response.statusCode) {     
            return res.status(200).json(JSON.parse(body));  
        }
      });    
  };

  