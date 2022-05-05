import React,{useContext} from 'react';
import {BrowserRouter as Redirect,Route} from "react-router-dom"
import userContext from './Store/userContext';

const Auth = ({element : Element, ...rest}) => {
    const useContext = useContext(userContext);
    const{isLoggedInHandler} = useContext;
  return (
    <Route
       render={(props) =>{
           !isLoggedInHandler?(
               <Redirect to={{path:"/",state : {from:props.location}}}/>
           ):(
               <Element {...props}/>
           )
       }}
    />
  )
}

export default Auth