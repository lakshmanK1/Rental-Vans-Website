import React from 'react'
import './ErrorElement.css'
import { useRouteError } from 'react-router-dom'

function ErrorElement() {
    const error = useRouteError();

  return (
    <main className='error-main'>
        <div className='error-div'>
            <h1 className='error-header'>Error: {error.message}</h1>
            <pre className='error-descrip'>StatusText: {error.statusText}</pre>
            <pre className='error-descrip'>Status: {error.status}</pre>
        </div>
    </main>
  )
}

export default ErrorElement