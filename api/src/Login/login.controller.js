// get users list 
const dbConn = require('../../config/db.config');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const LoginModel = require('./login.model');

exports.get_login = (req, res) => {
  const body = req.body;
  console.log("boddduuuu data ", body);

  LoginModel.get_login(body.email, (err, results) => {
    console.log("results data ", results);
    const [resultData] = results;
    const full_name = resultData.full_name;
    const id = resultData.id;

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


    if (result) {

      const jsontoken = sign({ result: results }, "qwe1234", {
        expiresIn: "1h"
      });
      console.log(jsontoken);
      return res.json({
        success: 1,
        message: "login successfully",
        token: jsontoken,
        full_name: full_name,
        id: id

      });

    } else {
      return res.json({
        success: 0,
        message: "Invalid email or password"
      });
    }

  })

}

