import React, { useEffect, useState } from 'react'

function getSavedValue(key , intialValue){
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue){
        return savedValue
    }else{
        return intialValue;
    }
}
const UseLocalStorage = (key  , initialValue) => {
    let[email , setEmail] = useState(()=>{
        return getSavedValue(key , initialValue);
    });
    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(email))
    }, [email , key]);
  return [email , setEmail];

}

const UseLocalStorage1 = (key  , initialValue) => {
    let[password , setPassword] = useState(()=>{
        return getSavedValue(key , initialValue);
    });
    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(password))
    }, [password , key]);
  return [password , setPassword];

}



export default UseLocalStorage
export {UseLocalStorage1}