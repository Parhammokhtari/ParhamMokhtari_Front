import React from "react";
import ToolBar from "./ToolBar";
import  { useState, useEffect } from "react";
import {errorMessage, successMessage} from "../util/message";
// import {useHistory} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
export default function Edit() {
const task=useSelector(state=>state.task);
const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
const navigate = useNavigate();
const taskArray=useSelector(state=>state.tasks);
const dispatch=useDispatch();


const EditHandler = async () => {
  console.log(status);
            let formData = new FormData();
            formData.append("id",task.id);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("status", status);
            console.log("hi nava",formData);
            await fetch(`/update?id=${task.id}`, {
                method: "POST",
                body: formData,
            })
                .then((res) => {
                  console.log("this is result: ",res);
                    navigate('/home');
                   const temp= [...taskArray];
                   const index=temp.findIndex(item=>item.id===task.id);
                   temp[index].title=title;
                   temp[index].description=description;
                   temp[index].status=status;
                   dispatch({type:"INIT",payload:temp});
                    successMessage("Successfully edit :D");
                })
                .catch(() => {
                    errorMessage("Failing edit D:");
                });
            setTitle("");
            setStatus("");
            setDescription("");
        
        
    };
const optionsArr=($currentState)=>{
  switch($currentState){
case "ToDo":
  return ["InProgress"];
  
  case "InQA":
     return ["ToDo","Done"];
 
  case "Done":
      return ["Deployed"];
  case "Blocked":
    return ["ToDo"];

  case "InProgress":
   return ["Blocked","InQA"];
  case "Deployed":
    return[];
   default:
    return[];
  }
}

const cancelHandler = async () => {
          navigate('/home');
        
    };


  return( 
  <>
  <ToolBar text="Task Management > Edit" />
  
  <div className="text-center">
   <div className="w-50 d-inline-block text-left" >
          <h3 className="mt-4">Edit Task</h3>
          <input type="text" className="form-control bg-gray in1 " placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
          <textarea
            placeholder="Description"
            className="w-100 text-area2 mt-2 bg-gray"
            onChange={(e)=>{setDescription(e.target.value)}}
            value={description}
          />
          <div className="slecetionBarContainer mt-2 ">
           
			
            <select className="form-select d-inline-block slecetionBar bg-gray"  aria-label=".form-select-lg example" onChange={(e)=>{
               setStatus( e.target.value)}} value={status} >
                <option className="options"  value={status}>{status}</option>;
               {optionsArr(status).map((status)=>{
                return  <option className="options" key={status} value={status}>{status}</option>;
               })}
               
              
           </select>

           <div className="buttonContainar  mt-2 ">
            <button type="button" className="btn btn-primary btn-lg btn-block btn1  margin-0  mt-2   size-button" onClick={EditHandler}>
            <i className="glyphicon glyphicon-edit mr-4"></i>
            Edit
            </button>
            <button type="button" className="btn border-gray btn-lg btn-block  btn1 margin-0 mt-2  size-button" onClick={cancelHandler}>
            <i className=""></i>
            Cancel
            </button>
           </div>
          </div>

          
         
          
   </div>
  </div>
  
  
  </>);
}
