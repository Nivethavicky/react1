import React from "react";
import './App.css';
import Child1 from "./child";
import { child2 } from "./child2";



function NineAm({word}){
 
  return(
    <div className="App" style={{backgroundColor:"blue"}}>
      <p>welcome to react</p>
      <p>{word}</p>
       <Child1/>
    </div>
  )
}

export default NineAm
