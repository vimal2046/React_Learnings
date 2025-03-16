import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

const User = () => {
   const userDetail = useLoaderData();
  return (
    <div><h3>{userDetail.name}</h3>
          <h4>{userDetail.email}</h4>
          <br />
          <h4>{userDetail.city}</h4>
     </div>
  )
}

export default User;