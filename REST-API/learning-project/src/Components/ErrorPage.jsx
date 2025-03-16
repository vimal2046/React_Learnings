import React from 'react'
import { useRouteError } from 'react-router'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
        <h3>error occured !!</h3>
        <p>{error.message}</p>
    </div>
  )
}

export default ErrorPage