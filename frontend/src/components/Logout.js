import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  userContext from '../Store/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()



export default function Logout() {
  let Navigate = useNavigate();
  const userctx = useContext(userContext);
  useEffect(() => {
    toast("logged out");
    userctx.clearUser();
    Navigate('/');
  }, [])

  return (
   <></>
  )
}