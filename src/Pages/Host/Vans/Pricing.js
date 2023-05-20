import React from 'react'
import useVanData from './useVanData'
import './NavLinkTabs.css'

function Pricing() {

    const {vandetails} = useVanData();

  return (
    <div>
        {
            vandetails ?
            <h1 className='pricing-price'>${vandetails.price}/day</h1> :
            <h1>Loading...</h1>
        }
    </div>
  )
}

export default Pricing