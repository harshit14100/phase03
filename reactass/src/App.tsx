import React, { useState, useEffect, type SyntheticEvent } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  
  const [list, setList] = useState<string[]>(() => {
    const saved = localStorage.getItem('myList')
    return saved ? JSON.parse(saved) : []
  })


  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(list))
  }, [list])

  const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const trimmedTitle = title.trim()
    if (trimmedTitle === '') return


    setList([...list, trimmedTitle])
    setTitle('') 
  }

  return (
    <div className='bg-black min-h-screen w-full text-white p-10'>
      <form onSubmit={submitHandler}>
        <div className='flex gap-5'>
          <input 
            type="text" 
            placeholder="Enter your name"
            className='bg-white text-black p-2 rounded' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='border-2 px-3 py-1 hover:bg-white hover:text-black transition-all'> 
            Submit 
          </button>
        </div>
      </form>

      <div>
        <h1 className='text-5xl py-5'>List</h1>
        <div className='flex gap-5 mt-5 overflow-x-auto'>
          {list.map((elem, index) => (
            <div key={index} className='h-40 w-60 bg-zinc-600 p-4 rounded-2xl flex-shrink-0  '>
              <input type="checkbox" className="mb-4" />
              <h1 className='leading-tight text-white text-2xl font-bold break-words'>{elem}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App