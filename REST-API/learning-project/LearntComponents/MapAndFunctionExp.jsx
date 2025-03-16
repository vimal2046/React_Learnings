import React from 'react'
const MapAndFunctionExp = () => {
    const users = [
        {name: "vimal",
        class: "10",
        age:"13"
        },{
            name:"vijay",
            class:"32",
            age:"43"
        },{
            name:"nav",
            class:"22",
            age:"32"
        }
    ]
   
  return (
    <main>
     {users.map((usersInfo) =>(
        <ul key={Math.random()}>
        <li>{usersInfo.name}</li>
        <li>{usersInfo.age}</li>
        <li>{usersInfo.class}</li>
        </ul>
     ))

     }
    </main>

  )
}
export default MapAndFunctionExp;