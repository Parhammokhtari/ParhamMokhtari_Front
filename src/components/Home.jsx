import React, { useState, useEffect } from "react";
import ToolBar from "./ToolBar";
import History from "./History"
import  { useSelector,useDispatch } from "react-redux";
// import SimpleReactValidator from "simple-react-validator";
import {errorMessage, successMessage} from "../util/message";
// import {useHistory} from "react-router-dom";
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import { getAllTasks } from "../redux/action/tasks";
import {setCurrentTask, delete_task } from "../redux/action/task";



const Home= ()=> {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const taskArr = useSelector((state) => state.tasks);
    const navigate = useNavigate();
    const task = useSelector(state => state.task);
    const person=useSelector(state=>state.person);
    const person_role=person[0].role;

    console.log("hi role" ,person_role);
// const validator = useRef(
//         new SimpleReactValidator({
//             messages: {
//                 required: "This field is required..",
//                 min: "This field should not be less than 5 characters..",
//             },
//             element: (message) => <div style={{color: "white"}}>{message}</div>,
//         })
//     );
const editEvent = (t) => {
       dispatch(setCurrentTask(t));
        navigate('/edit');
    }
  
 
   
const addHandler = async (e) => {
            let formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("status", "ToDo");
            console.log("hi nava",formData);
            await fetch(`/create`, {
                method: "POST",
                body: formData,
            })
                .then((res) => {
                
                  
                   navigate('/home');
                   dispatch(getAllTasks());
                    successMessage("Successfully added :D");
                      
                    
                })
                .catch(() => {
                    errorMessage("Failing add D:");
                });
            setTitle("");
            // setStatus("");
            setDescription("");
          
        
    };

const deleteEvent = async (t) => {
    console.log(task);
        dispatch(delete_task(t.id)).then(() => {
        let temp=  [...taskArr];
        temp=temp.filter(item=>item.id!==t.id);
          dispatch({type: "INIT", payload: temp})         
           successMessage("Successfully deleted :D");
            navigate.push("/home")
        }).catch(() => errorMessage("Failing delete D:"));
    }



useEffect(()=>{
 dispatch(getAllTasks());

},[])


  return (
    <div className="container-fluid p-0">

       {/* {person.map(t=>(
      <p>role id is: {t.id}</p>))} */}
      <ToolBar text="Task Management > Home" />
      <div className="text-center">
        <div className="w-50 d-inline-block text-left">
          <h3 className="mt-4">Add a new Task</h3>
          <input
            type="text"
            className="form-control bg-gray in1"
            placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}
          />
          <textarea
            placeholder="Description"
            className="w-100 text-area1 mt-2 bg-gray"
            onChange={(e)=>{setDescription(e.target.value)}}
          />

          <button type="button" className="btn btn-primary btn-lg btn-block btn1 mb-5" onClick={addHandler}>
            <i className="fa fa-plus white mr-2"></i>
            Add
          </button>
        </div>
      </div>
     <div className="p-5">
       <div className="bg-primary box1  d-inline-block w-100 text-left p-4" >
        <h4 className="ml-4 white topShowTask" >Tasks</h4>
        {taskArr.length===0?
         <div className="bg-bluelight d-inline-block w-100    box1 showTask"> 
          <div> 
           <p>You have noting to do.<br></br>Go get some sleep.</p>
         </div> 
         
        </div>:
        ( <div className="row bg-bluelight box1">

           {taskArr.map(t=>(
               <div className="col-12 col-sm-4  p-5  card1 " style={{height:"90"}}>
                <div className="  cards shadow-lg p-5 " style={{color:"black"}}>
                <h4>{t.id}</h4>
                 <h3 >Task Title: {t.title}</h3>
                 <h4>Task Description: {t.description}</h4>
             {person_role==1?
                 <div className="btContainer">
                   <span style={{width:"100px",height:"30px",backgroundColor:"blue",borderRadius:"10px",color:"white",textAlign:"center",display:"inline-block",lineHeight:"30px"}}>
                    {t.status}
                   </span>
                
              
                    <i className='fas fa-edit' style={{fontSize:"20px"}} onClick={()=>editEvent(t)}>  </i>
                    <i className='fas fa-trash' style={{fontSize:"20px"}} onClick={()=>deleteEvent(t)}></i>
                 
             
                  
                  
                      <Popup  className="popUp" trigger={<i class='fas fa-print' style={{fontSize:"20px"}}></i>}
	                   position="left center">
	                    <div ><History taskId={t.id}/></div>
                        
	                    </Popup>
                   
                 </div>:
                 (
                 
                     <div className="btContainer">
                   <span style={{width:"100px",height:"30px",backgroundColor:"blue",borderRadius:"10px",color:"white",textAlign:"center",display:"inline-block",lineHeight:"30px"}}>
                    {t.status}
                   </span>
                
                  
                      <Popup  className="popUp" trigger={<i class='fas fa-print' style={{fontSize:"26px"}}></i>}
	                   position="left center">
	                    <div ><History taskId={t.id} /></div>
                        
	                    </Popup>
                   
                 </div>
                 
                 )
}
                </div>
              </div>
           ))}
             
           </div>)}
      
      </div>
     </div>
    </div>
  );
}
export default (Home);