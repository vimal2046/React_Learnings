import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

// const AsyncAndAwait = async()=>{
//     try{
//         const data = await axios.get("https://cat-fact.herokuapp.com/facts");
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }finally{
//         console.log("Finsihed fetching")
//     }
    

// }


const AsyncAndAwait = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const AsyncAndAwait = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    AsyncAndAwait();
  }, []); // Runs only once when component mounts

  return (
    <div>
      <h2>Fetched Data</h2>
      {loading ? <CircleLoader/> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default AsyncAndAwait;

