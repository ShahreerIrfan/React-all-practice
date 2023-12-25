import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const name = "Irfan"
const singer = [
  {'name':'Dr Mahfuz',"job":"singer"},
  {'name':'Abul',"job":"KonoKamNai"},
  {'name':'kabul',"job":"olphoKam"},
]

const singerStyle = {
  'color':'red',
  'backgroundColor':'white'
}

function App() {
  const [count, setCount] = useState(0)
  const nayoks = ['irfan','BappaRaj','ZayedKhan','ShakibKhan']
  const nayikas = ['Tasnia','Purnima','Moushumi','Mehzabeen']

  return (

      <div className='app'>
        {/* Dynamin way */}

        {
          singer.map(singer=><Person name = {singer.name} ></Person>)
        }

        {
          nayoks.map(nayok=><li>{nayok}</li>)
          
        }
        {
          // nayoks.map(nayok=><Person name = {nayok} ></Person>)
          
        }

      
        {/* Static way */}
        {/* <Person name={nayoks[0]} nayika={nayikas[0]} profession='Programmer'></Person>
        <Person name={nayikas[1]} nayika={nayikas[1]} profession='Actor'></Person>
        <Person name = 'ZayedKhan' nayika='Moushumi' profession='Pagol'></Person>
        <Person name='AfranNisho' nayika='Mehzabeen' profession='Actor'></Person>
         */}
        <h4>Hi I am your Friend</h4>
        <Friend name = 'Joy' phone='849433'></Friend>
        <Friend name = 'patla Khan' phone='574'></Friend>
        <h1>Singer name is {singer.name}</h1>
      </div>

  )
}

function Person(props){
  console.log(props)
  return(
    <div className='person'>
      <h3>Singer name: {props.name}, Job: {props.nayika} </h3>
      <p>profession: {props.profession}</p>
    </div>
  )
  
}

function Friend(props){
  return(
  <>
  <div className='friend'>
    <h5>My name is {props.name}, My phone Number is {props.phone}</h5>
  </div>
  </>
  )
}

export default App
