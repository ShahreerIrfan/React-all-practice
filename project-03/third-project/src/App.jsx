import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
    <ExternelUsers></ExternelUsers>
    </>
  )
}

function ExternelUsers(){
  const[users,setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[]);

  return(
    <>
    <h2>ExternerUsers</h2>
    <p>{users.length}</p>
    {
      users.map(user => <User name={user.name} email={user.email}></User>)
    }
    </>
  )
}

function User(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Emai: {props.email}</p>
    </div>  
  )
}
// Hi






// function Counter(){
//   const [count,setCount] = useState(0)
//   const increaseCount = ()=>setCount(count+1)

//   const decreseCount = ()=>{
//     if(count>0){
//       setCount(count-1)
//     }
//   }
  
  
//   return(
//     <>
//     <div className="count">
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
     
//       <button onClick={decreseCount}>Decrease</button>
//     </div>
//     </>
//   )
// }




// function Product(props){
//   return(
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <h5>Price: {props.price}</h5>
//     </div>
//   )
// }


// {/* <div className="app">
//   {
//     products.map(product => <Product name={product.name} price={product.price}></Product>)
//   }
//   {/* <Product name = 'Laptop' price = '100000'></Product>
//         <Product name = 'Phone' price = '78788'></Product> */}

// </div> */}


// const products = [
  //   { name: 'Laptop', price: 3880 },
  //   { name: 'Mobile', price: 3944 },
  //   { name: 'Watch', price: 75940 },
  //   { name: 'Airpod', price: 79876 },
  // ]

export default App
