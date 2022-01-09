import "./styles.css";
import {Timer} from './components/Timer'
import { useState } from "react";
export default function App() {
 const [start,setStart]=useState()
 const [end,setEnd]=useState()
 const [status,setStatus]=useState(false)
 const handleSubmit=(e)=>{
   e.preventDefault()
setStatus(true)
 }
  return (
    <div className="App">
<form action="" onSubmit={handleSubmit}>
  <div>
  Start: <input type="number" name="start" onChange={(e)=>{setStart(+e.target.value)}} />
  </div>
<div>
End: <input type="number" name='end' onChange={(e)=>{setEnd(+e.target.value)}} />
</div>

<input type="submit" value ="Submit"/>
</form>
   
    
{status ? <Timer start={start} end={end} /> : <h1>set timer </h1>}
  
      </div>
  );
}
