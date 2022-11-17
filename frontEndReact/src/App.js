
import './App.css';
import  io  from 'socket.io-client';



import React, { useEffect, useState } from 'react'





function App() {
  const [msg, setmsg] = useState("")
  const [value, setvalue] = useState("")
  const socket = io("http://localhost:5000")

  const onclick=()=>{
    

// socket.on("hello", (arg1, arg2, arg3) => {
//   console.log(arg1); // 1
//   console.log(arg2); // "2"
//   console.log(arg3); // { 3: '4', 5: ArrayBuffer (1) [ 6 ] }
// });

socket.emit("ChatMsg",msg)
  }


  socket.on("reciMsg",(incommingmsg)=>{
    setvalue(incommingmsg)
    console.log(incommingmsg)
  })



  
  return (
    <> 
    <input value={msg} onChange={(e)=>{setmsg(e.target.value)}}></input>
    <div>
    {value}
    </div>
    <button onClick={onclick}>Click1</button>
    </>
    );
}


export default App;
