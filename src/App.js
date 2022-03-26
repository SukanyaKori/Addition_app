
import { useState,useEffect } from 'react';
import './App.css';

function App() {
 

  const[number1,setNumber1]= useState()
  const[number2,setNumber2]= useState()
  const[total,settotal]= useState(number1+number2)


  const getMode=()=>{
    return JSON.parse (localStorage.getItem("mode"))|| false}

  const[dark,setdarkmode]=useState(getMode())


  useEffect(()=>{
   localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])



  function addthemtogether(){
   
    settotal(number1+number2);
    
     }

  return (

    
    <div className={dark ? "App dark-mode":"App"}>
    <div className="nav">
      <label class="switch">
        <input type="checkbox"
              checked={dark}
              onChange={()=>setdarkmode(!dark)}
        />
        <span class="slider round"></span>
      </label>
      </div>

      <h1>Additon React App</h1>

      <div className="content">
      <h3>{dark?"Dark mode is on":"Light mode is on"}</h3>
      <input type="number" placeholder="0" value={number1} onChange={e =>setNumber1(+e.target.value)}/> &nbsp; &nbsp;
      <input type="number" placeholder="0" value={number2} onChange={e =>setNumber2(+e.target.value)}/>
      <br/>


   
      <button onClick={addthemtogether}><strong>Add them</strong></button>
    

       <h2>{total}</h2>

         </div>
    </div>
  );
}

export default App;
