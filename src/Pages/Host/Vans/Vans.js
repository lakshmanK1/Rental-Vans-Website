import React from 'react'
import { AllVans } from '../../../Components/Ui/Vans/AllVans'
import '../Host.css'
import { NavLink, useLoaderData} from 'react-router-dom'


export const loader = () => {
  if(AllVans.length<1){
    throw{
      message:'unable to get data,because there is no data present.',
      statusText:'bad request',
      status:404
    }
  }
  return AllVans;
} 

function Vans() {
  const allVansData = useLoaderData();

  return (
    <main className='vans-div'>
      <div className='vans-list-div'>
      <h1 className='vans-title'>your listed vans</h1>
        {
          allVansData.map((data)=>{
            return(
              <NavLink className='navlink' to={`${data.id}`} key={data.id}>
              <div className='vans-single-div' key={data.id}>
                <div className='vans-img-div'>
                <img className='vans-inner-img' src={data.img} alt={data.name}/>
                </div>
                <div className='vans-info-div'>
                  <h1 className='vans-inner-title'>{data.name}</h1>
                  <p className='vans-inner-price'>${data.price}/day</p>
                </div>
              </div>
              </NavLink>
            )
          })
        }
      </div>
    </main>
  )
}

export default Vans