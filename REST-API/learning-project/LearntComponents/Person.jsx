import React from 'react'

const Person = () => {
  return (
    <>
    <PersonList
        name = "vimal"
        id = {32}
    />
    </>
  )
}
const PersonList = ({name, id}) => {
    return(
        <>
    <h1>name : {name}</h1>
    <p>id is : {id}</p>
        </>
    )
}
export default Person     