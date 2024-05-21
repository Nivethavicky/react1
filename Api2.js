import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function Api2() {
  const [reslt,setReslt]=useState()
  const navigate=useNavigate()
  useEffect(()=>{
    async function getData(){
      try{
     let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //  let {data} =await axios.post("https://jsonplaceholder.typicode.com/posts",{
    //  title: 'foo',
    //  body: 'bar',
    //  userId: 1,
    //   })
      console.log(data)
      setReslt(data)
      //example for navigation using javascript, if we got response,then automatically navigate to content1.js
      navigate("/Api2")
       

    }catch(e){
      alert("something went wrong")
    }
  }
    getData()
  },[])
    return (
      <div>
       {/* {reslt.map((ele) => (
         < >
         <p>{ele.title}</p>
         </>
       ))} */}
       <p>{reslt?.title}</p>
      </div>
    )
  }
  
  export default Api2