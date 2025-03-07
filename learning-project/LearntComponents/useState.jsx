import React from 'react'
import { useState, useEffect } from 'react'

const State = () => {
const [x, setX] = useState(0)



const handle = () =>{
   setX(x + 1)
}
  return (
    <>
    <h1>{x}</h1>
    <button onClick={handle}>click me</button>
     
    </>
    
  )
}

export default State