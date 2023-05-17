import React,{useState, useEffect} from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {Link, useParams} from 'react-router-dom'
import { Vans } from '../Vans/AllVans'
import './SingleVan.css'

const initialData = [{id:123, name:'', button:'', description:'', price:'' }];

function SingleVan() {
    const [singlevan, setSingleVan] = useState(null);

    const params = useParams();
    console.log(typeof parseInt(params.id));

    useEffect(()=>{
        const vanDetails = Vans.find((data) => data.id === parseInt(params.id));
        setSingleVan(vanDetails);
    },[params.id])
    

  return (
    <main className='singlevan-main'>
        <Link to='/vans'>
        <div className='singlevan-back'>
            <BsArrowLeft/>
            <span className='singlevan-back-text'>Back to vans</span>
        </div>
        </Link>
    
        <div className='singlevan-img-div'>
            <img className='singlevan-img' src={singlevan.img} alt={singlevan.name}/>
        </div>

        <div className='singlevan-details-div'>
            <span className='singlevan-span'>{singlevan.button}</span>
            <h1 className='singlevan-name'>{singlevan.name}</h1>
            <p className='singlevan-price'>${singlevan.price}/day</p>
            <p className='singlevan-description'>{singlevan.description}</p>
            <button className='singlevan-rent-btn'>Rent this van</button>
        </div>
    </main>
  )
}

export default SingleVan