import { useEffect, useState } from "react"


export const Timer=({start,end})=>{

  console.log(start,end)

  const [time,setTime]=useState(start)
  useEffect(()=>{
    let interval=setInterval(()=>{
      setTime((prev)=>{
        if(prev>=end){
          clearInterval(interval)
          return 'time over'
        }
        return prev+1

      })
    },1000)
return ()=>{
  clearInterval(interval)
}
    
  }, [])
  return <div>
    <h1>Timer : {time}</h1>
  </div>
}