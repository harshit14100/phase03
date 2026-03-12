import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div className=' flex bg-gray-500 text-white p-3.5 text-2xl justify-center items-center'>
      <div>
        User:{userId}
      </div>
    </div>
  )
}

export default User