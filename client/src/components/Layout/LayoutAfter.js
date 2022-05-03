import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

function LayoutAfter(props){
  return(
    <>
      <Header/>
      {/* <Sidebar/> */}
        {props.children}
      <Footer/>
    </>
  )
}

export default LayoutAfter