import React from 'react'
import { Link } from 'react-router-dom'
import './HeroBanner.css'

function HeroBanner() {
  return (
    <div className='hero-div'>
      <div className='hero-text-div'>
        <h2 className='hero-title'>You got the travel plans, we got the travel vans.</h2>
        <p className='hero-text'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link><input className='find-van-btn' type='button' value='Find Your Van'/></Link>
      </div>
    </div>
  )
}

export default HeroBanner