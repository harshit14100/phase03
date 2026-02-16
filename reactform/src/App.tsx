import { useState } from 'react'
import './App.css'

function App() {
  const [title, settitle] = useState('')


  const submithandler = (e)=>{
    e.preventDefault();
    console.log("you submited :  ",title);
    settitle(' ')
  }

  return (
    <>
    <form onSubmit={(e)=>{
      submithandler(e);
    }}>

    <div className='flex gap-5'>
    <input type="text" placeholder = "Enter your name"className='bg-white text-black' 
    value={title}
    onChange={(e)=>{
      settitle(e.target.value);
      console.log(e.target.value);
      
      
    }}/>
    <button> Submit </button>
    </div>
    </form>
    </>
  )
}

export default App
