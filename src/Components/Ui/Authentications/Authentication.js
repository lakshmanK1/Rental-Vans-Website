import React from 'react'
import './Authentication.css'

function Authentication() {
  return (
        <section className='auth-sec'>
            <p className='auth-type'>Signin</p>
            <form className='auth-form'>
                <div className='auth-div'>
                  <div className='auth-inputdiv'>
                  <input className='auth-input' type='email' placeholder='Email'/>
                  <input className='auth-input' type='password' placeholder='Password'/>
                  </div>
                <input className='auth-btn' type='button' value='Login'/>
                </div>
            </form>
            <p className='auth-account'>Don't have account? <span className='auth-acc-create'>create now</span></p>
        </section>
  )
}

export default Authentication