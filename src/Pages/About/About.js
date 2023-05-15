import React from 'react'
import AboutImage from '../../Assets/about-hero.png'
import './About.css'

function About() {
  return (
    <main className='about-main-div'>
        <img className='about-img' src={AboutImage} alt='about-image'/>

        <div className='about-text'>
            <h1 className='about-header-text'>Don’t squeeze in a sedan when you could relax in a van.</h1>
            
            <p className='about-para'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to 
            ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)
            </p>
            <p className='about-para'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className='about-destination'>
                <div className='inn-details-div'>
                <p className='destination-text'>Your destination is waiting.Your van is ready.</p>
                <button className='destination-btn'>Explore our vans</button>
                </div>
            </div>
        </div>     
    </main>
  )
}

export default About