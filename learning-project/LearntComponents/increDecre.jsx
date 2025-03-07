import { useState } from "react";

const State = () =>{
    const [count , setCount] = useState(2);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return(
   <section>
    <h1>{count}</h1>
    <button onClick={increment}>plus</button>
    <button onClick={decrement}>minus</button>
   </section>
    )
}
export default State;