import React from 'react'
import './VansList.css'
import AvailableVans from './AvailableVans'

function VansList() {
  return (
    <main className='vans-list-main'>
    <h2 className='vans-list-title'>Explore our van options</h2>
    <div className='vanlist-tabs-div'>
        <span className='vanlist-tab'>Simple</span>
        <span className='vanlist-tab'>Luxury</span>
        <span className='vanlist-tab'>Rugged</span>
        <span className='vanlist-filter-tab'>Clear Filters</span>
    </div>

    <AvailableVans/>
    </main>
  )
}

export default VansList