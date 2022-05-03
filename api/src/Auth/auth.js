const jwt = require("jsonwebtoken");
var jwtUniuqeKey = 'dhwani';

const verifyToken = (req, res, next) => {
    let {token} = req.headers;
    jwt.verify(token, 'dhwani', function(err, decoded) {
      if(err) {
        return res.send({
          status: 401,
          message: 'Please enter valid token'
        });
      }
      req.userData = decoded;
      next();
    });
  }

  module.exports= verifyToken;