import React from 'react'



const UserStatus =({loggedIn, isAdmin})=>{
  console.log("runnin")
    if(loggedIn &&isAdmin){
      return <h1>Welcome Admin !!</h1>
    }else{
      <h1>Welcome User</h1>
    }
      };
export default UserStatus;