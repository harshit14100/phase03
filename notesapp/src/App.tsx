import React, { useState, type InputEventHandler, type SyntheticEvent } from 'react'
import { IoClose } from "react-icons/io5";


const App = () => {
  const [txt, settxt] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([ ])

  const submithandler = (e: SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const copytask = [...task]
    // console.log("form submitted ", txt);
    // console.log("details :", details);
    

    copytask.push({txt,details})
    console.log(copytask);

    settask(copytask)

    // console.log(settask);
    
    settxt('')
    setdetails('')
  }

  const deletenote = ((idx)=>{
    const coptask = [...task]
    console.log("note deleted");
    console.log(idx);
    coptask.splice(idx,1);

    settask(coptask)
  })
  return (
    <div className='bg-black w-full h-screen text-white  p-10 '>
      <form onSubmit= {(e) =>{
        submithandler(e)
      }}className='flex gap-3 p-10 justify-between w-fit w-full ' >
        <div className='flex gap-3 p-10 flex-col w-1/2'>

        {/* pehla input  */}
        <input type="text" placeholder='Enter notes heading' className='px-5 py-2 rounded border-2 border-zinc-400'
        value={txt}
        onChange={(e)=>{
          settxt(e.target.value )
        }}
        />

        {/* detailed input  */}
        <textarea placeholder='Enter notes Details' className='px-5 py-2 rounded h-30 border-2 border-zinc-400'
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
        />

        {/* submit  button  */}
        <button className='bg-white text-black px-5 py-2 active:bg-gray-400 active:scale-95' >Add notes</button>
        </div>

        <img src="https://imgs.search.brave.com/EGsLKQvQs2xAtDAxijH-VZqarZJkTmXNzxVL9A3bRIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvV29y/a2luZy1QTkctRmls/ZS5wbmc" alt="" className='h-100'/>
      </form>

      {/* notes cards */}
      <div className=' '>
        <h1 className=' border-t-red-500 text-4xl font-bold'>Your notes</h1>
        <div className='flex  gap-5 mt-5 overflow-x-auto h-full '>
          {task.map((elem,idx)=>{
            return <div key={idx} className='relative h-80 w-60 bg-[url("https://imgs.search.brave.com/L_4VXYGKuYIQkJmzTJt3NaMNxpzMcPby_f6b1dcv_dY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1Lzcy/L2Q3Lzc1NzJkN2E3/ZjQ2M2M5ZTE3YjFl/MzFjMTBhNmVlYWYy/LmpwZw")] bg-cover rounded-2xl flex-shrink-0'>
              <h1 className='leading-tight text-black text-3xl pl-14 py-3 font-bold'>{elem.txt}</h1>
              <p className='text-black leading-tight text-gray-600 font-medium  text-xl pl-14'>{elem.details}</p> 
              <h3 onClick={()=>{
                deletenote(idx)
              }} className='bg-zinc-300 active:scale-95 rounded-full text-red-500 h-8 w-8 right-2 absolute top-2 text-4xl flex items-center justify-center cursor-pointer'><IoClose /></h3>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
