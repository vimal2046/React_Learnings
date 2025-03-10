import React from 'react'
import { useState } from 'react'
const Hooks = () => {
    const[friends, setFriends]=useState(['vimal','chandar'])
    console.log(friends)
    const addFriend = ()=>{
        setFriends([...friends, "vimalllfs"])
    }
    const removeFrnd = ()=>{ return(
        setFriends(friends.filter(fun => fun != "chandar"))
    )}
    const updateOne = () => 
        setFriends(friends.map(fun => fun === 'chandar' ? 'vimalchandar' : fun))

    
  return (
    <section>
  {friends.map((fun) =>( 
    <li key={Math.random()}>
      {fun}
    </li>
  ))}
  <button onClick={addFriend}>clicks</button>
  <button onClick={removeFrnd}>remcoe</button>
  <button onClick={updateOne}>update</button>
    </section>
  )
}

export default Hooks