import React from 'react'

const moveHandler = () => {alert("modws detected")
  console.log("mouse in console")
}
const Move = () =>{
  return <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Expedita, quasi!</p>
}
const Event = () => {
  return (
    <>
     <Move/>
    </>
  )
}

export default Event