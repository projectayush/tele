import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import '../css/Registration.css'
import { useNavigate } from 'react-router-dom';
import userContext from '../Store/userContext';
var validator = require('validator');


const Registrations = () => {
  const userctx = useContext(userContext);
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState({ full_name: false, email: false, password: false, confirmPassword: false })
  const [errors, setErrors] = useState({})

  let navigate = useNavigate();
  let data1 = { email: email };



  const handleSubmit = async () => {

    // console.log(errors)
    let created_at = new Date().toLocaleDateString();
    let updated_at = new Date().toLocaleDateString();
    let role_id = 1;
    let data = { full_name, email, password, role_id, created_at, updated_at };
    if (email && password && full_name) {
      if (validator.isEmail(email)) {
        if (password !== confirmPassword) {
          setErrors({
            ...errors,
            confirmPassword: "Confirm password does not match password"
          })
        }

        if (password === confirmPassword) {
          setErrors({
            ...errors,
            confirmPassword: ""
          })
          // console.log("Success")
          try {
            // const {email} = email
            let res = await fetch(`http://localhost:5000/api/v1/registration`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            let resJson = await res.json();
            console.log(resJson.data.email)
            console.log(resJson);
            
            
            localStorage.setItem("email", resJson.data.email)
            console.log('resjson ', resJson);
            localStorage.setItem("full_name", resJson.data.full_name);
            //localStorage.setItem("email", {});

            localStorage.setItem("f_Id", resJson.result.id);
            localStorage.setItem("f_Token", resJson.token);

            console.log('id:', resJson.result.id)
            console.log('token:', resJson.token)
            let user = {
              full_name: res.data.full_name,
              token: res.data.token,
              email: email,
              id: res.data.id
            }
            console.log("userdata2343:", user);
            console.log("userctx", userctx.updateUser(user))
            userctx.updateUser(user);
            


            if (resJson.status === 200) {

           
              console.log(resJson);
              navigate("/otp");
              toast("Data added Successfully")
              console.log("Data added Successfully");


            } else {
              toast("Data added Successfully")
              // console.log("Some error occured");
            }
          } catch (err) {
            console.log('ErroR:', err);
          }
        }
      }
    }
    Nowmail();
  }

  let Nowmail = async () => {
    if (email.length === 0) {
      toast.error("Please Enter Email id")
    } else {
      try {

        let res = await fetch('http://localhost:5000/loginfrontend/ResetPasswords', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data1)
          ,
        })

        let resJson = await res.json();
        console.log('resjson ', resJson);
        console.log('resJson.token', resJson.token);

        localStorage.setItem("f_Id", resJson.result.id);
        localStorage.setItem("f_Token", resJson.token)
        console.log('id:', resJson.result.id)
        console.log('token:', resJson.token)
        toast("Successfully sent to your Email id , Please Check")
        

        navigate(`/otp`)
      } catch (error) {
        toast.error("Email ID is not valid , Try again!");
      }
    }
  }


  const handlefullName = async (e) => {
    e.preventDefault()
    setName(e.target.value)

    if (full_name.length < 2) {
      setErrors({
        ...errors,
        full_name: "required *"
      })
    }
    if (full_name.length > 2) {
      setErrors({
        ...errors,
        full_name: ""
      })
      setSubmit({
        ...submit,
        full_name: true
      })
    }

    if (!full_name) {
      setErrors({
        ...errors,
        fields: "fields cannot be empty"
      })
    }

  }

  const handleEmail = async (e) => {
    e.preventDefault()
    setEmail(e.target.value)

    if (!validator.isEmail(email)) {
      setErrors({
        ...errors,
        email: "Invalid email formate"
      })
    }
    if (validator.isEmail(email)) {
      setErrors({
        ...errors,
        email: ""
      })
      setSubmit({
        ...submit,
        email: true
      })
    }
  }


  const handlePassword = async (e) => {
    e.preventDefault()
    setPassword(e.target.value)

    if (password.length !== 0) {

      setErrors({
        ...errors,
        password: "**Password required"
      })
      setSubmit({
        ...submit,
        password: true
      })
    }

  

  }

  const handleConfirmPassword = async (e) => {
    e.preventDefault()
    setConfirmPassword(e.target.value)

    setSubmit({
      ...submit,
      confirmPassword: true
    })
  }

  const [counter, setCounter] = React.useState(59);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);

  }, [counter])
  return (
    <div className="row" id="registrationForm">
      <div className="col-md-7" style={{ verticalAlign: "middle" }}>
        <img src={require('../../src/assets/images/GXI-telecom1.jpg')} className="img-fluid " alt="registration" />
      </div>
      <div className="col-md-5 mainclass text-center ">
        <form autocomplete="off">
          <h3 className="  mx-3 text-center  fs-1 fw-bolder signclass" >Sign Up</h3>
          <div className="form-group  mt-4 mx-3">
            <label className="my-0">
              <i className="fas fa-user"></i>
              <input type="name" placeholder="Full name"
                value={full_name}
                onChange={(e) => setName(e.target.value)}
                onChange={handlefullName}
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>
            <p><span style={{ color: 'red' }}>{errors.full_name}</span></p>
          </div>


          <div className="form-group mx-3">
            <label className="my-0">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email-address"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleEmail}
                className="form-control-lg shadow-sm rounded-pill border border-secondary " />
            </label>
            <p><span style={{ color: 'red' }}>{errors.email}</span></p>
          </div>

          <div className="form-group  mx-3">
            <label className="my-0">
              <i className="fas fa-lock"></i>
              <input type="password" autoComplete='off' placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onChange={handlePassword}
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>

            <p><span style={{ color: 'red' }}>{errors.password}</span></p>
          </div>

          <div className="form-group  mx-3">
            <label className="my-0">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm-Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onChange={handleConfirmPassword}
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>
            {/* {confirmPassword&&<div className='error-msg'>{errors.confirmPassword}</div>} */}
            <p><span style={{ color: 'red' }}>{errors.confirmPassword}</span></p>
          </div>
          <div className="align-items-center justify-content-center mt-4 mx-4 ">
            <button type="button" className="btn btn-primary border border-0 " onClick={handleSubmit} >Sign Up</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Registrations