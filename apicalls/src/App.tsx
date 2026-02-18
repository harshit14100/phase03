import { useEffect, useState } from 'react'
import './App.css'
import { json } from 'stream/consumers'

function App() {
  const [content, setcontent] = useState('posts')
  const [user, setuser] = useState([])

  const [error, seterror] = useState(null)

  const getdata = (()=>{
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(data);
  })

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      if(!response.ok){
        throw new Error("network response was not ok") 
      }
      return response.json()
    }).then((data)=>{
      setuser(data);
      seterror(null);
    }).catch((err)=>{
      seterror(err.message)
    })
    
  },[content])

  return (
    <>
      <div className='bg-black h-screen p-10 '>
        <div>
        <button onClick={()=>setcontent('posts')} className='text-zinc-400 border-2 border-amber-50'>posts</button>
        <button onClick={()=>{setcontent('likes')}} className='text-zinc-400 border-2 border-amber-50'>likes</button>
        <button onClick={()=>{setcontent('comments')}} className='text-zinc-400 border-2 border-amber-50'>comments</button>
        </div>
      <h1 className='text-white p-20 text-8xl'>{content}</h1>
      </div>
    </>
  )
}

export default App
