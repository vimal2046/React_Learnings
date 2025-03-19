import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <br />

      {/* Input to take custom value */}
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      
      {/* Button to add custom input to counter */}
      <button onClick={() => {setCount(count + value);  setValue(""); }}>Add</button>
    </div>
  );
};

export default Counter;
