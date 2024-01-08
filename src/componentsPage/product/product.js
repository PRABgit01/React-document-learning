import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      <input type='search' placeholder='search any thing'></input>
      <nav>
        <Link to="feature">feature</Link>
        <Link to="new">new</Link>

      </nav>
      <Outlet/>
    </div>
  )
}

export default Product
