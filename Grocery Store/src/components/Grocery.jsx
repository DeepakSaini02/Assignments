import { nanoid } from 'nanoid'
import { useState } from 'react'
import {GroceryInput} from './GroceryInput'
import {GroceryList} from './GroceryList'

export const Grocery=()=>{
  const [list,setList]=useState([])
  const againHandle=(data)=>{
    const payload={
      title:data,
      status:false,
      id:nanoid(6)
    }
setList([...list,payload])
  }
  // console.log(list);
  const handleToggle=(id)=>{
    let l=list.map((el)=>(
    el.id===id ? el.status=!el.status :el.status,el
      ))
      setList(l)
      
      
  }

  const handleDelete=(id)=>{
    let l=list.filter((el)=>(el.id!==id))
    setList(l)
  }
return <>
<GroceryInput getData={againHandle} />
{
  list.map((el)=>(
 
    <GroceryList key={el.id} id={el.id} title={el.title} status={el.status} handleToggle={handleToggle} handleDelete={handleDelete}/>

  ))
}

</>
} 