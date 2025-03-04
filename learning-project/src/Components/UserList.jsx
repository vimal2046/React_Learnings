import React from 'react'

const UserList = () => {
    const users = [
        {id:1, name: "vimal",age:32},
        {id:2, name:"navi", age:42},
        {id:3, name:"bhv",age:432},
    ]
  return (
    <>
      <main>
        {users.map((UserInfo) => (
            <ul key={UserInfo.id}>
                <li>{UserInfo.name}</li>
                <li>{UserInfo.age}</li>
                
            </ul>
        ))}
      </main>
    </>
  )
}

export default UserList