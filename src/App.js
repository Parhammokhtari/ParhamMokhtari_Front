import Home from "./components/Home";
import Edit from "./components/Edit";
import React, { useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store/index";
import Login from "./components/athenticate/Login";
import SignUp from "./components/athenticate/SignUp";
import History from "./components/History";
import { successMessage } from "./util/message";
import {ToastContainer} from "react-toastify";


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home/>}/>
               <Route path="/history" element={<History/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
              <Route path="/edit" element={<Edit/>}/>
              <Route path="/" element={<Login/>}/>
          </Routes>
          <ToastContainer/>
      </BrowserRouter>
      </Provider>
    </>

                   
  );
}

export default App;
