const dbConn = require('../../../config/db.config');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const LoginModel = require('./loginFront.model');
// const { json } = require('express');

exports.login_user = (req, res) => {
    const body = req.body;
    console.log("body data ", body);
  
    LoginModel.login(body.email, (err, results) => {
      console.log("results data ", results);
      const [resultData] = results;
      const full_name = resultData.full_name;
      const id = resultData.id;
      const role_id = resultData.role_id;
      console.log('full_name' , full_name);
  
  
      console.log("resultData : ", resultData);
  
      if (err) {
        console.log(err);
      }
      if (!results || (resultData === null)) {
        return res.json({
          success: 0,
          message: "Invalid email or password"
        });
      }
      const result = (body.password === resultData.password);
      console.log(result);
  
      const hashPass = bcrypt.hash(req.body.password, 12);
      if (result && role_id===1) {
  
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h"
        });
        console.log(jsontoken);
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
          full_name: full_name,
          id: id,
          data:resultData
        });
  
      } else {
        return res.json({
          success: 0,
          message: "Invalid email or password"
        });
      }
  
    })
  
  }
  
  