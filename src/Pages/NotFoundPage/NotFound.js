import React from 'react'
import './NotFound.css';
import {BiError} from 'react-icons/bi'

function NotFound() {
  return (
    <main className='notfound-main'>
        <div className='notfound-div'>
            <BiError className='error-icon'/>
            <h1 className='notfound-header'>404 Error</h1>
            <p className='notfound-descrip'>Sorry, the page you are lokking for is not found</p>
            <button className='notfound-btn'>Back to Home</button>
        </div>
    </main>
  )
}

export default NotFound