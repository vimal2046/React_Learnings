import React from 'react'
import { useNavigate } from 'react-router'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <h1>Contact page</h1>
        <h2>🤙🤙📞</h2>
        <div className='buttons'>
      
      
      <button onClick={()=>navigate('info')}>Information</button>
      <button onClick={()=>navigate('form')}>Form</button>
      </div>
    </div>
  )
}

export default Contact