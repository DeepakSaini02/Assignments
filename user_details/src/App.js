import "./styles.css";
import {Form} from './components/Form'
import { Table } from "./components/Table";
import { useState } from "react";
import "./App.css"

export default function App() {
const [details,setDetails]=useState([])

const sendData=(d)=>{
  setDetails(d)

}
  return (
    <div className="App">
  <Form sendData={sendData} />
  <Table details={details} />
     </div>
  );
}
