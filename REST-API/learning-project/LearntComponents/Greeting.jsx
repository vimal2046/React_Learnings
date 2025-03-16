import React from 'react'

const morning = () =>{return (<h1>morning</h1>)}
const afternoon = () => <h1>Evening</h1>

const Greeting = (props) => {
 
  return  props.timeOfDay === "morning" ? (<h1>Good Morning</h1>) : (<h1>Good Evening</h1>)
  

}
export default Greeting;




