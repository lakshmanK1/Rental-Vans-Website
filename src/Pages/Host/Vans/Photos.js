import React from 'react'
import useVanData from './useVanData'
import './NavLinkTabs.css'

function Photos() {
    const {vandetails} = useVanData();

  return (
    <div>
        {
            vandetails ? 
            <img className='photos-img' src={vandetails.img} alt={vandetails.name}/> :
            <h1>Loading...</h1>
        }
    </div>
  )
}

export default Photos