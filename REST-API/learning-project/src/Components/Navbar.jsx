import React from 'react'
import '../index.css'
import { Navigate, NavLink, replace, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src="https://gingersauce.co/wp-content/uploads/2020/12/pasted-image-0-2-3-1024x950.png" width='50px' alt="" />
        <ul>
           <NavLink to= '/' end><li>Home</li></NavLink> 
           <NavLink to='/products' replace><li>Products</li></NavLink>
           <NavLink to='/about'><li>About</li></NavLink>
           <NavLink to='/users'><li>Users</li> </NavLink>
           <NavLink to='/contact-us'><li>Contact</li></NavLink> 
        </ul>
        <button onClick={()=>navigate('/login',{replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar