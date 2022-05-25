import React, { useState, useContext , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()


// const INITIAL_COUNT = 30
// const twoDigits = (num) => String(num).padStart(1,'0')

const Otp_login = () => {
//   let token_from_local = localStorage.getItem("f_Token");
    let navigate = useNavigate();
    // const [secondsRemaining,setSecondsRemaining] = useState(INITIAL_COUNT)
    // const secondToDisplay = secondsRemaining % 60
    // const minutesRemaining = (secondsRemaining - secondToDisplay) /60
    // const minutesToDisplay = minutesRemaining % 60
    // const hoursToDisplay = (minutesRemaining - minutesToDisplay) /60

    const [resetToken, setResetToken] = useState({});
    const [FinalSeconds, setFinalSeconds] = useState(60);
    const [otp, setOtp] = useState("");
    const [OtpCheck, setOtpCheck] = useState(false);
    const [email, setEmail] = UseLocalStorage('email', '');

    
  console.log("resetToken",resetToken);
    //let Seconds = 30;

  console.log('Id : ', localStorage.getItem('f_Id'));
	console.log('Token : ', localStorage.getItem('f_Token'));
    let data ={otp:resetToken};
    let data1 = { email: email };
   
    useEffect(() => {
        timer();
    }, [])

    const timer = () =>{
      setOtpCheck(0);
        let Seconds = 60;
        let newSeconds = Seconds;

        setInterval(() => {
            if(newSeconds>0){        
                newSeconds=newSeconds-1;
                console.log("Reduce The Seconds" ,newSeconds);
                //console.log(newSeconds);
                setFinalSeconds(newSeconds)
                //setOtpCheck();
            }else if(newSeconds===0){
                //setFinalSeconds(0)
                setOtpCheck(true)
            }
        },1000);  
    } 
    

      const reSendotp= async () => {

        console.log("cLICKED");

            let res = await fetch('http://localhost:5000/loginfrontend/ResetPasswords', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data1)
              ,
            })
    
            let resJson = await res.json();             
            localStorage.setItem("f_Id", resJson.result.id);
            localStorage.setItem("f_Token", resJson.token)
            console.log('id:', resJson.result.id)
            console.log('token:', resJson.token)
            toast("Successfully sent to your Email id , Please Check")
            setOtpCheck(false);
            timer();
          
            if(resJson.status===404){
              toast.error("Email ID is not valid , Try again!");
            }
               
          }
    

    const verifyOtp = async () => {
      // let token_from_local = localStorage.getItem("f_Token");
      // console.log("yyhvv",token_from_local);
		try {
			let response = await fetch(`http://localhost:5000/loginfrontend/CheckOtps`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data)
				,
			})

			let resJson = await response.json();
			console.log('resjson ', resJson);
			console.log('resJson.token', resJson.token);

      if (resetToken !== resJson.result.otp) {
        toast("Login successfully");
        navigate(`/home`)
      }
      // else if(resJson.status===401){
      //   toast.error("OTP expired");
      // }
			// alert("Your OTP is verified Successfully");
			
			
		} catch (error) {
			toast("Please Enter Valid OTP");
		}
	}


//--------------------------------------------


    return(

        <>

    <div className="row" id="forgotpassword">
    <div className="col-md-7 ">
      <img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
    </div>
    <div className="col-md-5 mainclassName text-center">
      <form >
        <h3 className="text-center  fs-2 fw-bolder signclassName " ><b>Verify OTP For Login</b></h3>

        <div className="form-group  mx-1 ">
          <label className="my-0">
            <i className="fas fa-lock fs-4"></i>
            {/* <i className="fa-solid fa-lock"></i> */}


            <input type="text" onFocus placeholder="Enter 4 Digit Otp" 
            // value={otp} 
            // onChange={(e) => setOtp(e.target.value)}
            onChange={(e) => setResetToken(e.target.value)}
              className="form-control-lg shadow-sm rounded-pill border border-secondary" />
          </label>
        </div>


        <div className="form-group mt-4 mx-3">
          <button type="button" className="btn btn-primary border-0 "

              onClick={ () => verifyOtp()}
          >Verify</button>


        </div >
        
        
        <div className="form-group  mx-3 mt-3">
        Resend otp in <span style={{color:'green'}}>00:{FinalSeconds}</span>
        </div>
        <div className='form-group  mx-3 mt-3'>
       {FinalSeconds<1 ? (
       <button type="button" className='btn btn-secondary ' onClick={ () => reSendotp()} ><b>Resend Otp</b></button>
       
       ):(
       
        <button disabled type="button" className='btn btn-secondary' onClick={ () => reSendotp()} ><b>Resend Otp</b></button>
       
       )}
       </div>    
       
       
       
      </form>
    </div>

  </div>

  </>

    )

//--------------------------------





















    // const ShowBtn = () =>{

    //     return(

    //         <>

    //     <div className="row" id="forgotpassword">
    //     <div className="col-md-7 ">
    //       <img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
    //     </div>
    //     <div className="col-md-5 mainclassName text-center">
    //       <form >
    //         <h3 className="text-center  fs-2 fw-bolder signclassName " ><b>Verify OTP For Login</b></h3>

    //         <div className="form-group  mx-3 ">
    //           <label className="my-0">
    //             {/* <i className="fas fa-envelope"></i> */}
    //             <input type="text" onFocus placeholder="Enter Otp" value={otp} onChange={(e) => setOtp(e.target.value)}
    //               className="form-control-lg shadow-sm rounded-pill border border-secondary" />
    //           </label>
    //         </div>


    //         <div className="form-group mt-4 mx-3">
    //           <button type="button" className="btn btn-primary border-0 "

    //           	onClick={ () => verifyOtp()}
    //           >Verify</button>


    //         </div >
            
    //         <div className="form-group  mx-3 mt-3">
    //         Resend otp in <span style={{color:'green'}}>{FinalSeconds}</span>
    //         </div>
           
    //        <div className='form-group  mx-3 mt-3'>
    //            <button type="button" className='btn btn-secondary' onClick={reSendotp} >Resend Otp</button>
    //        </div>
    //       </form>
    //     </div>

    //   </div>

    //   </>

    //     )


    // }   


    // const DontShowBtn = () =>{

    //     return(

    //         <>
            
    //         <div className="row" id="forgotpassword">
    //     <div className="col-md-7 ">
    //       <img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
    //     </div>
    //     <div className="col-md-5 mainclassName text-center">
    //       <form action="">
    //         <h3 className="text-center  fs-2 fw-bolder signclassName " ><b>Verify OTP For Login</b></h3>
    //         <div className="form-group  mx-3 ">
    //           <label className="my-0">
    //             {/* <i className="fas fa-envelope"></i> */}
    //             <input type="email" onFocus placeholder="Enter Otp" value={otp} onChange={(e) => setOtp(e.target.value)}
    //             //   onChange={(e) => setEmail(e.target.value)}
    //               className="form-control-lg shadow-sm rounded-pill border border-secondary" />
    //           </label>
    //         </div>


    //         <div className="form-group mt-4 mx-3">
    //           <button type="button" className="btn btn-primary border-0 "

    //           	onClick={ () => verifyOtp()}
    //           >Verify</button>


    //         </div >
            
    //         <div className="form-group  mx-3 mt-3">
    //         Resend otp in <span style={{color:'green'}}>{FinalSeconds}</span>
    //         </div>         
          
    //       </form>
    //     </div>

    //   </div>
            
    //         </>

    //     )

       


    // }   


//     if(OtpCheck!==true){        
//         return(
            
//             <DontShowBtn/>  
            
        
//         )
//     }else{

//         return(
        
//                 <ShowBtn/>      
//         )
        
//     }
}
export default Otp_login 

// import React, { useState, useContext } from 'react';

// import { useNavigate } from 'react-router-dom';
// import '../css/Otp.css'


// const Otp = () => {
// 	let navigate = useNavigate();

// 	// const [password , setPassword] = useState([]);
// 	const [resetToken, setResetToken] = useState([]);

// 	// const [otp, setOtp] = useState([]);

// 	console.log('Id : ', localStorage.getItem('f_Id'));
// 	console.log('Token : ', localStorage.getItem('f_Token'));
// 	let data ={otp:resetToken};
// 	const resetpassword = async () => {
// 		try {
// 			let res = await fetch(`http://localhost:5000/login/checkOtp`, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(data)
// 				,
// 			})

// 			let resJson = await res.json();
// 			console.log('resjson ', resJson);
// 			console.log('resJson.token', resJson.token);
// 			alert("Your OTP is verified Successfully");
// 			navigate(`/confirmpassword/${localStorage.getItem('f_Token')}/${localStorage.getItem('f_Id')}`)
			
// 		} catch (error) {
// 			window.alert("Please Enter Valid Data");
// 		}
// 	}
	
// 	return (
// 		<div className='body-class'>
// 			<div className="container-fluid ">
// 				<div className='mainclasses'>
// 					<form action="">
// 						<div className="form-group ">
// 							<h4 className="text-center">ENTER OTP</h4>
// 							<label htmlFor="">OTP</label>
// 							<input type="password"
// 								className="form-control text-black"
// 								onChange={(e) => setResetToken(e.target.value)}
// 								placeholder="Enter OTP"
// 								required />
// 						</div>

					

// 						<div className="row mt-3">

// 							<div className="col-md-6 mt-3">
// 								<p><input type="button" className="btn" value="Submit"
// 									onClick={resetpassword}
// 								/></p>
// 							</div>

// 						</div>

// 					</form>
// 				</div>
// 			</div> 
// 		</div>
// 	)

// }

// export default Otp
