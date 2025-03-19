import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByValue} from "../counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  const [value,setValue] = useState("");
    return (
    <>
    <div className='container'> 
    {/*h2 for show the current value*/}
    <h2 id='counter'>Counter: {count}</h2>
    {/*increment button for increment the value by 1*/}
    <button id='increment' onClick={()=>dispatch(increment())}>Increment</button>
    {/*decrement the value by 1*/}
    <button id='decrement' onClick={()=>dispatch(decrement())}>Decrement</button>
    <br />
    {/*Getting the custom input by using the payload*/}
    <input id='input-payload' type="number" onChange={(e) => setValue(e.target.value)}/>
   {/*button to dispatch the payload value */}
    <button id='payload-dispatch'
    onClick={ () => { dispatch(incrementByValue(Number(value)))
      setValue("");
    }}>
      Add this value to the counter</button>
      </div>
      
    </>
  )
}

export default Counter