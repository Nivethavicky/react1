import React, { useEffect, useState } from 'react'

function Twoway() {
  const[input1,setInput1]=useState("hello")

  function handleInput(e){
    console.log(e.target.value)
    setInput1(e.target.value)
  }

  useEffect(()=>{
    console.log("hi")
  },[input1])
  return (
    <div>
      <input onChange={(e)=>handleInput(e)}/>
      <p>{input1}</p>
    </div>
  )
}

export default Twoway