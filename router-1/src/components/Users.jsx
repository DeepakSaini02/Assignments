import { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom'
export const Users = () => {
const [data,setData]=useState([])

const ds={
    width:"60vw",
    margin:'auto'
}

    useEffect(()=>{
        fetch("http://localhost:3001/products").then((res)=>res.json()).then((res)=>setData(res))
    },[])

const columns=[
    {title:"Product Name",field:"name"},
    {title:"Price",field:"price"},
    {title:"Know more", render: (data) => <Link to={`/users/${data.id}`}>More Details</Link>}
]

    return <div>

<MaterialTable style={ds} data={data} columns={columns}  />

    </div>
}