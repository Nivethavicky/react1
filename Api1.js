import React, { useState } from 'react'
import "../src/Api1.css"
function Api1() {
  let arr=[1,2,3]
  let obj1={name:"bhuvi"}
  const[flag,setFlag] = useState("true")
  const[isColor,setIsColor] = useState("true")
  
  return (

    <div>
    <p>{arr}</p>
    {/* arr return as string eg:123 */}
   {/* <p>{obj}</p> error: object cant be react child */}
     
     <p>{obj1.name}</p>  
     {/* convert array into object using stringfy */}
     <p>{JSON.stringify(obj1)}</p>

{/* instead of js for loop */}
     {arr.map((e) => (
     < >
      <p>{e}</p>

     </>
     )
     )}

     {/* filter and map */}
     {arr.filter((e) => e>2).map((a) =>(
       <>
        <p>{a}</p>
       </>
       ))}
     

     {/* conditional rendering */}
     {flag?(
       < >
       <p className={isColor?'hi':'hello'}>DISPLAY</p>
       </>
     )
     :(
       <>
        <p className={isColor?'hi':'hello'}>HIDE</p>
       </>
     )
}
{/* to change style */}
<p className={flag?'blue':'yellow'}>hello blue</p>
<button onClick={() => {setFlag(!flag);setIsColor(!isColor)}}>show/hide</button>
    </div>
  )
}

export default Api1