import React,{useState, useEffect} from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {Link, useParams, useLocation} from 'react-router-dom'
import { AllVans } from '../Vans/AllVans'
import './SingleVan.css'

const initialData = [{id:123, name:'', type:'', description:'', price:'' }];

function SingleVan() {
    const [singlevan, setSingleVan] = useState(initialData);
    const params = useParams();
    const location = useLocation();

    console.log(location);

    useEffect(()=>{
        const vanDetails = AllVans.find((data) => data.id === parseInt(params.id));
        setSingleVan(vanDetails);
    },[params.id])
    
    const search = location.state?.search || '';
    const type = location.state?.type || 'all';

  return (
    <main className='singlevan-main'>
        <Link to={`..${search}`} relative='path'>
        <div className='singlevan-back'>
            <BsArrowLeft/>
            <span className='singlevan-back-text'>{`Back to ${type} vans`}</span>
        </div>
        </Link>
    
        <div className='singlevan-img-div'>
            <img className='singlevan-img' src={singlevan.img} alt={singlevan.name}/>
        </div>

        <div className='singlevan-details-div'>
            <span className='singlevan-span'>{singlevan.type}</span>
            <h1 className='singlevan-name'>{singlevan.name}</h1>
            <p className='singlevan-price'>${singlevan.price}/day</p>
            <p className='singlevan-description'>{singlevan.description}</p>
            <button className='singlevan-rent-btn'>Rent this van</button>
        </div>
    </main>
  )
}

export default SingleVan