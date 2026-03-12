import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [num, setnum] = useState(10)


  const getdata = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=2&limit=10')
      const json = await response.json()
      setData(json) 
    } catch (error) {
      console.error("Failed to fetch:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getdata()
  }, []) 

  return (
    <>
      <div>
        <button className='text-5xl' onClick={getdata} >get photos
        </button>
      </div>

      <div className="image-grid h-200 w-200">
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.author}</p>
            <img src={item.download_url} /> 
          </div>
        ))}
      </div>
    </>
  )
}

export default App