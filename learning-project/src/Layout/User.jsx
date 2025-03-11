import React from 'react'
import { useParams } from 'react-router';

const User = () => {
    const {id, name} = useParams();
  return (
    <div>User- {id}
        <p>Name-{name}  </p>  </div>
  )
}

export default User;