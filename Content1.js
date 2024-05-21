import React from 'react'
import { Link } from 'react-router-dom';
const userData =[
  {
    name:"Vijay",
    city:"Chennai",
    description:"Front-end developer",
    skills:["UI/UX", "Front-end development", "HTML","CSS","JAVASCRIPT", "REACT"] ,
    online:true,
    profile:"images/img1.jpg"
  },

  {
    name:"Ajith",
    city:"Coimbatore",
    description:"Full stack web developer",
    skills:["Vlogging", "Web Development", "HTML",
    "CSS","JAVASCRIPT", "REACT", "Angular"] ,
    online:false,
    profile:"images/img2.jpg"
  },
  {
  name:"Vijay Sethupathi",
    city:"Tirunelveli",
    description:"Senior Software developer",
    skills:["C","C++","Java Programming", "Python",
    "C#.Net", "MySQL","MongoDB"] ,
    online:true,
    profile:"images/img3.jpg"
  },
  {
    name:"Ajith",
    city:"Coimbatore",
    description:"Full stack web developer",
    skills:["Vlogging", "Web Development", "HTML",
    "CSS","JAVASCRIPT", "REACT", "Angular"] ,
    online:false,
    profile:"images/img2.jpg"
  },

  {
     name:"Vijay Sethupathi",
      city:"Tirunelveli",
      description:"Senior Software developer",
      skills:["C","C++","Java Programming", "Python",
      "C#.Net", "MySQL","MongoDB"] ,
      online:true,
      profile:"images/img3.jpg"
    },
    {
      name:"Vijay",
      city:"Chennai",
      description:"Front-end developer",
      skills:["UI/UX", "Front-end development", "HTML","CSS","JAVASCRIPT", "REACT"] ,
      online:true,
      profile:"images/img1.jpg"
    },
];
function User(props){
  return <div class="card-container">
  <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE" : "OFFLINE"}</span>
  <img src={props.profile} className="img" alt="user"></img>
  <h3>{props.name}</h3>
  <h3>{props.city}</h3>
  <p>{props.description}</p>
  <div className='buttons'>
    <button className='primary'>
      MESSAGE
    </button>

    <button className="primary outline">
      FOLLOWING
    </button>
  </div>
<div className='skills'>
  <h6>SKILLS</h6>
  <ul>
    {/* {props.skills} */}
    {/* using map for array */}
    {props.skills.map((skill,index)=>
    (
      <li>
        <li key={index}>{skill}</li>
      </li>
    ))}
    
  </ul>
  <Link to={"/Content"}>Go to Home</Link>
  </div>
  
  </div>
 
}

export const Content1 = () => {
  return (
    < >
    
   {userData.map((user,index) =>(
      <User key={index} 
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}
      />
    ))}
    </>
  )
}
