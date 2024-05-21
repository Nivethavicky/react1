import logo from './logo.svg';
import './App.css';
 import NineAm from './NineAm';
import Child1 from './child';
import { useState } from 'react';
//import { student } from './component/student';

function App() {
  let word="this is react class"
  let word1="this is a paragraph"

  const[new1,setNew1]=useState("usestate is used")

  function updateHere(){
    word="updated"
    console.log(word)
    setNew1("updated")
  }
  return (
    <div className="App">
       <p style={{color:"red"}}>hello</p>

      {/* instead of document.getelemEnt */}
      <p>{word}</p>
      <NineAm/> 
      {/*passing word to NineAm (app is parent, nineam is child)  */}
       <NineAm word={word}></NineAm>
      <NineAm word={word1}></NineAm> 
      <NineAm yo={word} yo1={word1}></NineAm>   
      <Child1/>

      <p>{new1}</p>
      <button onClick={()=>updateHere()}>UPDATE</button>
    </div>
  );
}

export default App;
