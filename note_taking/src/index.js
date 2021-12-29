import("./index.css")

import logo from '../images/logo.jpg'

let container=document.getElementById('container')
let notes=document.getElementById('notes')
console.log('helo');
let img=document.createElement('img')
img.id="img"
img.src=logo
container.appendChild(img)

let i=0
let noteform=document.getElementById('noteform')
let details=document.getElementById('details')

noteform.addEventListener("submit", function(event){
    event.preventDefault()
    let heading=document.getElementById('heading').value
    
    let content=document.getElementById('content').value 
    if(heading=="" || content=="")
    return
    let div1=document.createElement('div')
    div1.id='noteDiv'


    let div2=document.createElement('div')
    div2.id='noteDiv2'
    let showbtn=document.createElement('button')
    
    showbtn.innerText='show'


    showbtn.addEventListener("click",function(){
      i=i+1
      console.log('i:', i)
      let showHeading=document.getElementById('showHeading')
      let showContent=document.getElementById('showContent')
      showHeading.innerText=heading
      showContent.innerText=content
      if(i%2==0){
        details.style.display='none'
      }else
      details.style.display='block'
    })


    let delbtn=document.createElement('button')
    delbtn.innerText='delete'
    
    delbtn.addEventListener("click",function(){
      div1.remove()
      details.style.display='none'
    })
    div2.append(showbtn,delbtn)
    div1.append(heading,div2)
    notes.append(div1)


  });
  document.getElementById("closebtn").addEventListener("click",()=>{
    document.getElementById("details").style.display="none"
  })


