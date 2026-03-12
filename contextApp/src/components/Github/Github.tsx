// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// interface datatype {
//   followers: number,
//   avatar_url: string
// }

const Github = () => {
  const data2 = useLoaderData()
  // const [data2, setdata2] = useState<datatype>()
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/harshit14100').then(response=> response.json()).then(data => {
  //     console.log(data);
      
  //     setdata2(data)
  //   })
  // },[])
  return (
    <div className='bg-gray-500 p-6 text-2xl flex justify-center text-white'>
      <div className='flex flex-col'>

      Github Followers: {data2?.followers}
        <div>
          <img src={data2?.avatar_url} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Github

export const Githubloader = async ()=>{
  const response = await fetch('https://api.github.com/users/harshit14100') 
  return response.json()
}