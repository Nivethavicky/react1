import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

  function Content(props) {
  return (
    <div className='content'>
     <>
     {/* props-properties(using props from parent component) */}

    <p>props-properties(using props from parent component)</p>
    <table>
      <tbody>
      <tr>
        <th>NAME</th>
        <td>{props.name}Madhu</td>
      </tr>

      <tr>
        <th>AGE</th>
        <td>{props.age}24</td>
      </tr>

      <tr>
        <th>isMarried</th>
        <td>{props.isMarried ?"yes" : "no"}</td>
      </tr>
      </tbody>
    </table>
     </>

     {/* <Link to={"/Content1"}>Go to Profile</Link> */}

     <Link to={"/Api2"}>Go to Api2</Link>
    </div>
  )
}

// export default Content;
   export default Content;
  //  Content.PropTypes ={
  //   name:PropTypes.string,
  //   age:PropTypes.number,
  //   isMarried:PropTypes.bool
  // };
