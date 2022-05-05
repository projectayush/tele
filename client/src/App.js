import React,{useContext} from 'react';
// import Layoutafter from './components/layouts/layoutafter';
// import Layoutbefore from './components/layouts/layoutbefore';
import LayoutAfter from './components/Layout/LayoutAfter';
import LayoutBefore from './components/Layout/LayoutBefore'
//  import {  useUserContext } from './store/userContext';
import CustomRoute from './CustomRoute';
import isLoggedIn from './Store/userContext';
import userContext from './Store/userContext';

// import isLoggedInHandler from './store/userContext';



function App() {
  const userctx = useContext(userContext);
  let isLogged =  userctx.isLoggedIn();
 
  //  let {isLogged} = useUserContext();
  // const {isLoggedIn} = useUserContext();
   let afterLayout =  <LayoutAfter><CustomRoute/></LayoutAfter>
   let beforeLayout = <LayoutBefore><CustomRoute/></LayoutBefore>
  return (
    // isLogged ? afterLayout : beforeLayout

    // <useContext.Provider>
      isLogged ? afterLayout : beforeLayout
    // </useContext.Provider>
    
  );
}

export default App;