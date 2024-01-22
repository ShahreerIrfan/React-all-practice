/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header/Header'
import Shop from './assets/Components/Shop/Shop'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header></Header>
        <Shop></Shop>
      </div>      
    </>
  )
}

export default App

// ..
