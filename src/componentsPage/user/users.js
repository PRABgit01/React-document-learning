import React from 'react'

import { Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
        <h1>user1</h1>
        <h1>use2</h1>
        <h1>user3</h1>
    <Outlet/>
    </div>
  )
}

export default Users