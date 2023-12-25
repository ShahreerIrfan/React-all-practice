/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import DeviceDetails from './components/DeviceDetails/DeviceDetails'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Device name = "Xiaomi" price = "64000"></Device>
      <Device name = "Samsung" price = "48000"></Device>
      <Watch></Watch>
    </>
  )
}

export default App
