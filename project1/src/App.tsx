import { useState } from "react"

function App() {

  const [color, setcolor] = useState("white")
  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 p-5">
          <div className="fixed flex flex-wrap justify-center gap-3 bg-white shadow-lg px-4 py-2 rounded-4xl bottom-12">

          <button onClick={()=>setcolor("red")} className="bg-red-500 text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">red</button>
          <button onClick={()=>setcolor("yellow")} className="bg-yellow-500 text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">yellow</button>
          <button onClick={()=>setcolor("purple")} className="bg-purple-500 text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">purple</button>
          <button onClick={()=>setcolor("black")} className="bg-black text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">black</button>
          <button onClick={()=>setcolor("#808000")} className="bg-[#808000] text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">olive</button>
          <button onClick={()=>setcolor("pink")} className="bg-pink-600 text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">pink</button>
          <button onClick={()=>setcolor("blue")} className="bg-blue-500 text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">blue</button>
          <button onClick={()=>setcolor("green")} className="bg-green-500 text-red-50 px-5 py-1 outline-0 rounded-full shadow-2xl">green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
