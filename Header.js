import React from 'react'
import { Link, useParams } from 'react-router-dom';


function Header() {
  let customCSS ="code";
  const isLoggedIn=true;
  const greeting =isLoggedIn?<p>Welcome back!</p> : <p>Please log in</p>;
  const items=["Item1","Item2","Item3"]
  const {id}=  useParams()
  return (
    <div>
      
      <h1 className='banner'>Let's Learn REACT</h1>
      <p className="slogan">React is a library for Javascript for building user-interface front end application</p>

      <p>Passing data using routing using use useParams(There is no parent child relationship){id}</p>

      {/* javascript expression in jsx */}

      <p style={{fontSize:"20px",fontStyle:"italic"}}>25+30={25+30}</p>
     {/* adding color for this expression in different way */}
     <p className={customCSS}>25+30={25+30}</p>

     {/* jsx with conditional rendering */}
     {greeting}

     {/* jsx with list */}
     {/* using map to display array values */}
     <ul>
       {items.map((item,index)=>(<li key={index}>{item}</li>))}
     </ul>
   <Link to={"/Content"}>Go to Content</Link>

   
    </div>
  )
}

export default Header