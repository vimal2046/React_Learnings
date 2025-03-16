import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffect = () => {

const [num1, setNum1] = useState(100)

useEffect(()=>{
    setNum1(200)
},[]);
console.log(num1);

  return (
    <div>
    <h1>{num1}</h1>
    <button onClick={()=> {
        setNum1((curr)=>curr  + 1)
    
    }}>Click</button>
    
    </div>
  );
};

export default UseEffect