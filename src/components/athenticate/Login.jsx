import React from "react";
import {Link} from "react-router-dom";
import "./login.css";
import  { useState, useEffect,useRef } from "react";
import { useNavigate } from 'react-router-dom';
import SimpleReactValidator from "simple-react-validator";
import {errorMessage, successMessage} from "../../util/message"
import {setCurrentPerson } from "../../redux/action/person";
import  { useSelector,useDispatch } from "react-redux";
export default function Login() {
    const dispatch = useDispatch();
const [username, setUsername] = useState("");
const [password, setpassword] = useState("");
const [person,setPerson]=useState([]);
const [login, setLogin] = useState(false);
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

const validation = async (e) => {
            let formData = new FormData();
            
            formData.append("username", username);
             formData.append("password", password);
             
            console.log("hi nava",formData);
            await fetch(`/validation`, {
                method: "POSt",
                body: formData,
            })
                .then(response => response.json()
                                 ).then(json => {
                                   console.log("hai");
                             dispatch({type: "SET_PERSON", payload: json['person']})
                              navigate('/home');
                                 })
                                 .catch(() => {
                                  console.log("faild");
                    errorMessage("Failing login D:");
                });
            
             setUsername("");
            
            setpassword("");
      
        
    };

//   useEffect(()=>{
//   fetch(`/validation`, {
//             method: 'GET',
//         }).then(res => res.json()
//         ).then(json => {
//             setPerson(json['person']);
//             console.log(JSON.stringify(person))
//         }).catch(() => console.log("error"));
 
// },login)
  return( 
  <>
  <div className="boxLogin " style={{height: "100vh", margin: 0, padding:0 , width:"100%"}}>
      <div>
        <div className="hdr">
          <h1>Member Login</h1>
        </div>
        <div>
          <div className="fieldContainer">
            <div>
              <label htmlFor="username">Username : </label>
              <input type="text" name="username" id="username" required onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div>
              <label htmlFor="password">Password : </label>
              <input type="password" name="password" id="password" required onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>

            <button name="Login" onClick={()=>{ validation(); setLogin(!login) }}>Login</button>
          </div>

          <div>
           
             <Link
              to={"/signUp"}>
             <p>SignUp</p>
             </Link>
          </div>
        </div>
      </div>
    </div>


  </>);
}
