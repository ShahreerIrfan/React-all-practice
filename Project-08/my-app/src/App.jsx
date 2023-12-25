/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmetics from './Components/Cosmetics/Cosmetics'
import Shoes from './Components/Shoes/Shoes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Cosmetics></Cosmetics>
        <Shoes></Shoes>
    </div>
      
  )
}

export default App
