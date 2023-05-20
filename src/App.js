import React from 'react';
import './App.css';
import LayoutHeader from './Components/Ui/LayoutHeader/LayoutHeader';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import OurVans from './Pages/OurVans/OurVans';
import SingleVanDetails from './Pages/SingleVanDetails/SingleVanDetails';
import Host from './Pages/Host/Host';
import DashBoard from './Pages/Host/DashBoard'
import Income from './Pages/Host/Income'
import Vans from './Pages/Host/Vans/Vans'
import Reviews from './Pages/Host/Reviews'
import SpecificVan from './Pages/Host/Vans/SpecificVan';
import Details from './Pages/Host/Vans/Details';
import Pricing from './Pages/Host/Vans/Pricing';
import Photos from './Pages/Host/Vans/Photos';

import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Routes>
        <Route path='/' element={<LayoutHeader/>}>
        <Route index element={<Home/>}/>
        <Route path='aboutus' element={<About/>} />

        <Route path='vans'>
        <Route index element={<OurVans/>} />
        <Route path=':id' element={<SingleVanDetails/>}/>
        </Route>

        <Route path='host' element={<Host/>}>
          <Route index element={<DashBoard/>}/>
          <Route path='income' element={<Income/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          <Route path='allvans'>
            <Route index element={<Vans/>}/>
            <Route path=':id' element={<SpecificVan/>}>
              <Route index element={<Details/>}/>
              <Route path='pricing' element={<Pricing/>}/>
              <Route path='photos' element={<Photos/>}/>
            </Route>
          </Route>
        </Route>
        </Route>
      </Routes>
    </div>
    </React.Fragment>
  );
}

export default App;
