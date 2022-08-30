
import React, { useState, useEffect } from "react";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  { useSelector,useDispatch } from "react-redux";
// import { getHistoryTask } from "../redux/action/tasks";

export default function History({taskId}){


// const dispatch = useDispatch();
const [historyTask, setHistory] = useState([]);
   const person=useSelector(state=>state.person);
   console.log(person);
useEffect(()=>{
  fetch(`/history?id=${taskId}`, {
            method: 'GET',
        }).then(res => res.json()
        ).then(json => {
            setHistory(json['history']);
        }).catch(() => console.log("error"));
},[])
// const historyArr=useSelector(state=>state.historyTask);
return(
<div>
	{/* {JSON.stringify(historyTask)}; */}
    <div>
        <p style={{wigth:"bold",fontSize:"20px",marginBottom:"0px",color:"blue"}}>{person[0].first_name} {person[0].last_name}</p>
          <h5 style={{color:"black"}}>has made the following edits :</h5>
    </div>
    <table className="table table-dark">
         <thead>
        <tr>
            <th scope="col">TaskID</th>
            <th scope="col">Title</th>
            <th scope="col">Desceription</th>
            <th scope="col">Status</th>
        </tr>
      </thead>
 <tbody>
	 {historyTask.map(t=>(
      
       <tr>
            <td>{t.task_id}</td>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>{t.status}</td>
        </tr>
        
 
    
 
  
     ) )}
 </tbody>
              </table>
</div>
)
};
