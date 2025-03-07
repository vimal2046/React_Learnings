import React from 'react'

const Valid = () =><h1>hello welcome</h1>
const Invalid = () =><h1>invalid user</h1>

const Password = ({isValid}) =>{
    return isValid ? <Valid/> : <Invalid/>
}

export default Password;