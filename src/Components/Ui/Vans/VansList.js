import React from 'react'
import './VansList.css'
import AvailableVans from './AvailableVans'
import { AllVans } from './AllVans';
import {useSearchParams, useLocation} from 'react-router-dom'

function VansList() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const urlSearchParams = params.get('filterBy');
  const toStrParams = params.toString();

  const handleUseParams = (key, value) => {
    setParams(prevParams => {
      if(value === null){
        prevParams.delete(key);
      }else{
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const filteredData = urlSearchParams ? AllVans.filter(data => data.type.toLowerCase().includes(urlSearchParams.toLowerCase())) : AllVans;


  return (
    <main className='vans-list-main'>
    <h2 className='vans-list-title'>Explore van options</h2>
    <div className='vanlist-tabs-div'>
        <span className='vanlist-tab' onClick={()=>handleUseParams('filterBy','simple')}>Simple</span>
        <span className='vanlist-tab' onClick={()=>handleUseParams('filterBy','luxuary')}>Luxuary</span>
        <span className='vanlist-tab' onClick={()=>handleUseParams('filterBy','rugged')}>Rugged</span>
        {urlSearchParams && <span className='vanlist-filter-tab' onClick={()=>handleUseParams('filterBy', null)}>Clear Filters</span>}
    </div>

    <AvailableVans filteredData={filteredData} toStrParams={toStrParams}/>
    </main>
  )
}

export default VansList