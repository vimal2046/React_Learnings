import React from 'react'
import { Link, useLoaderData } from 'react-router';


const Users = () => {
    const users = useLoaderData();
  return (
    
    <div>
        {users.map((user) =>{
            return(
                <Link to={user.id.toString()} key={user.id} >
                <div className='user'>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                </div>
                </Link>
        )})}
    </div>
  )
}

export default Users;

 