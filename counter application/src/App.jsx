import { useState } from "react";
import "./styles.css";

function App() {
  const [count,setCount]=useState(0)
  // const addOne=()=>{
  //   setCount(count+1)
  // }
  function addOne(v){
    setCount(count+v)
  }
  return (
    <div className="App">
     <h2>Count:{count}</h2>
     <button onClick={()=>addOne(1)}>add</button>
     <button onClick={()=>addOne(-1)}>delete</button>
     {/* {count%2===0 ? <h2>even</h2> : <h2>odd</h2>} */}
     <h1>Counter is {count%2===0 ?"even" : "odd"}</h1>
     <button onClick={()=>addOne(count)}>double</button>
     
        </div>
  );
}
export default App