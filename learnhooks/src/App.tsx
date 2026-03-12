import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [num, setnum] = useState(5)
    const [num, setnum] = useState(10)
  const [num2, setnum2] = useState(100)

  const incnum = (()=>{
    setnum(num + 5)
  })


  useEffect(()=>{
    console.log('useeffect is running...');
  },[num])

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
        <div>
          <h1>Value of num is {num}</h1>
          <h1>Value of user is {num2}</h1>
        <button onClick={()=>{
          setnum(num + 1)
          setnum2(num2 + 10)
        }} className='cursor-pointer bg-blue-400 rounded-full w-30 text-2xl'> num</button>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
