/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import PriceList from './Component/PriceList/PriceList'
import DashBoard from './Component/DashBoard/DashBoard'
import PhoneBar from './Component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className='text-purple-600 text-7xl mx-12'>Hello From Tailwind</h1>
        <PriceList></PriceList>
        <DashBoard></DashBoard>
        <PhoneBar></PhoneBar>
      </div>
    </>
  )
}

export default App