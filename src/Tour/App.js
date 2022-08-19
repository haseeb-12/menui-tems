import React, { useCallback, useEffect, useState } from 'react'
import Loading from './FirstProject/Loading'
import Tours from './FirstProject/Tours'
import axios from 'axios'
import './FirstProject/Tour.css'
function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const removeData = (id) => {
    const newData = data.filter((value) => value.id !== id)
    setData(newData)
  }
  const fetchData = useCallback(() => {
    axios.get('https://course-api.com/react-tours-project').then(response => setData(response.data))
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (data.length === 0)
    return (
      <main>
        <div className='title'>
          No data   left
          <button className='btn' onClick={fetchData}>Refresh</button>
        </div>
      </main>
    )

  return (
    <main>
      <Tours data={data} removeData={removeData} />
    </main>
  )

}

export default App