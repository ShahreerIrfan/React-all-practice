/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <District name="Chandpur" speciality="Ilish"></District>
      <District></District>
      <LoadPost></LoadPost>
    </>
  )
}


function LoadPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <>
      <h3>Total post are: {posts.length}</h3>
      {
        // eslint-disable-next-line react/jsx-key
        posts.map(post => <Post 
        title = {post.title}
        body = {post.body}
        ></Post>)
        
      }
    </>
  )
}

function Post(props) {
  return (
    <>
    <div className='post'>
    <h3>Title : {props.title}</h3>
    <p>Body: {props.body}</p>
    </div>
    </>
  )
}


const districtStyle = {
  backgroundColor: 'orange',
  margin: '20px',
  padding: '20px',
  borderRadious: '20px',

}

function District(props) {
  const [power, setPower] = useState(1)
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }
  return (
    <div style={districtStyle}>
      <h3>District name is: {props.name}</h3>
      <h4>District speciality is: {props.speciality}</h4>
      <h5>Power: {power}</h5>
      <button className='btn btn-success' onClick={boostPower}>Boost</button>
    </div>
  )
}
export default App
