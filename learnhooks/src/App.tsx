import { useState } from 'react'
import './App.css'

function App() {
  const [num, setnum] = useState(5)

  const incnum = (()=>{
    setnum(num + 5)
  })


  const decnum = (()=>{
    if(num === 0){
      return;
    }
    setnum(num - 5) 

  })

  return (
    <>
    <div className='bg-zinc-700 text-5xl h-screen w-full text-white flex justify-center items-center'>
      <div>
      {/* <h1 className=''>heyy this is {name}</h1> */}
      <h1 className='text-9xl p-14 bg-zinc-900 w-fit '>{num}</h1>
      <div className='gap-14'>
        <button onClick={incnum} className='cursor-pointer bg-blue-400 rounded-full w-30 text-2xl '>Increase</button>
        <button onClick={decnum} className='cursor-pointer bg-blue-400 rounded-full w-30 text-2xl '>Decrease</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
