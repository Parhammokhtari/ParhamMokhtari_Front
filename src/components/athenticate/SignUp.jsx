import React from "react";
import {Link} from "react-router-dom";
import "./signUp.css";
import  { useState, useEffect,useRef } from "react";
import { useNavigate } from 'react-router-dom';
import SimpleReactValidator from "simple-react-validator";
import {errorMessage, successMessage} from "../../util/message";

export default function SignUp() {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [username, setUsername] = useState("");
const [password, setpassword] = useState("");
const navigate = useNavigate();
const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "This field is required..",
                min: "This field should not be less than 5 characters..",
            },
            element: (message) => <div style={{color: "white"}}>{message}</div>,
        })
    );

const signUpHandler = async (e) => {
            let formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("username", username);
             formData.append("password", password);
             
            console.log("hi nava",formData);
            await fetch(`/createUser`, {
                method: "POST",
                body: formData,
            })
                .then((res) => {
                  console.log("this is result: ",res);
                    successMessage("Successfully signUp :D");
                })
                .catch(() => {
                    errorMessage("Failing signUp D:");
                });
            setFirstName("");
             setUsername("");
            setLastName("");
            setpassword("");
            navigate('/');
        
    };

  return( 
  <>
  <div className="boxLogin" style={{height: "100vh", margin: 0, padding:0 , width:"100%"}}>
      <div>
        <div className="header">
          <h1>SignUp</h1>
        </div>
        <div>
  
            <div className="fieldContainer">
              <div>
                <label htmlFor="first-name">First name : </label>
                <input type="text" name="first-name" id="first-name" required onChange={(e)=>{setFirstName(e.target.value)}}   />
              </div>
              <div>
                <label htmlFor="last-name">Last name : </label>
                <input type="text" name="last-name" id="last-name" required onChange={(e)=>{setLastName(e.target.value)}}/>
              </div>
              <div>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" id="username" required onChange={(e)=>{setUsername(e.target.value)}}/>
              </div>
              <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" required onChange={(e)=>{setpassword(e.target.value)}} />
              </div>

              <button name="signUp"  onClick={signUpHandler}>SignUp</button>
            </div>
            <div className="link">
              <Link
              to={"/"}>
             <p>Login page</p>
             </Link>
            </div>
      
        </div>
      </div>
    </div>

 
  </>);
}
