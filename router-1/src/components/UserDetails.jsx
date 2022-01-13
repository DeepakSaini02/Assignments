import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const UserDetails=()=>{
    const {userid}=useParams()
    
    const [data, setData] = useState({});

 useEffect(()=>{
    fetch(`http://localhost:3001/products`).then((res)=>res.json()).then((d)=>{
        d.filter((el)=>{
            if(el.id==userid){
                setData(el)
            }
        })
    })
 },[])

switch(data.name){
case undefined:return <div>Product does not exist</div>
default:return <div>
    <p>{data.name}</p>
    <p>{data.price}</p>
    <p>{data.brand}</p>
    <p>{data.expiry_date}</p>
      </div>                

}
    
}