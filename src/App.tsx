import { useState } from 'react'
import Greeting from './greeting'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1>Count: {count} </h1>
     <button onClick={()=> setCount(count + 1)}>Tambah</button>
     
     <Greeting name = 'MIE AYAM'/>
    </>
  )
}

export default App
