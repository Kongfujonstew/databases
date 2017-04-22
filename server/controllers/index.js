var models = require('../models');

var defaultCorsHeaders = [
  ['access-control-allow-origin', '*'],
  ['access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS'],
  ['access-control-allow-headers', 'content-type, accept'],
  ['access-control-max-age', 10] // Seconds.
];

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('message get');
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('access-control-allow-headers', 'content-type, accept');
      res.setHeader('access-control-max-age', 10);


      models.messages.get(res);

      // res.send(JSON.stringify({
      //   results: [{
      //     text: 'hey man',
      //     username: 'joe',
      //     roomname: 'lobby'
      //   }]
      // }));
    },




    post: function(req, res) {
      // console.log(req.body)
      console.log('message post');
      models.messages.post(req.body);
    }
  },

  users: {
    get: function(req, res) {
      // somedatabasefunction( with a quesrystring)
      console.log('users get');
    },







    post: function(req, res) {
      console.log('users post');
    }
  },

  rooms: {
    get: function(req, res) {
      console.log('rooms get');
    },









    post: function(req, res) {
      console.log('rooms post');
    }
  }

};
