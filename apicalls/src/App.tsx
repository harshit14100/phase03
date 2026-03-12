import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])


  const getdata = async ()=>{
    const response =   await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data);
    setdata(response.data)
    
  }
  return (
    <div>
      <button onClick={getdata} className=''>click </button>
      <div>{data.map((elem, idx)=>{
        return <h1 className='text-5xl font-bold '>hello {elem.author} {idx}</h1>
      })}</div>
    </div>
  )
}

export default App
