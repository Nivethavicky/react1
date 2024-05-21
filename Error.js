import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className='error'>
      <h1>The page does not exist!</h1>
      <p>sorry, the page you were looking for could not be found!</p>
      <Link to={"/Content"}>Go to Content</Link>
    </div>
  )
}

export default Error