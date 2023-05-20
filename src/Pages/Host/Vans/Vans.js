import React from 'react'
import { AllVans } from '../../../Components/Ui/Vans/AllVans'
import '../Host.css'
import { NavLink } from 'react-router-dom'


function Vans() {
  return (
    <main className='vans-div'>
      <div className='vans-list-div'>
      <h1 className='vans-title'>your listed vans</h1>
        {
          AllVans.map((data)=>{
            return(
              <div className='vans-single-div' key={data.id}>
                <NavLink className='navlink' to={`${data.id}`}>
                <div className='vans-img-div'>
                <img className='vans-inner-imag' src={data.img} alt={data.name}/>
                </div>
                <div className='vans-info-div'>
                  <h1 className='vans-inner-title'>{data.name}</h1>
                  <p className='vans-inner-price'>${data.price}/day</p>
                </div>
                </NavLink>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Vans