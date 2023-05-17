import React from 'react';
import './App.css';
import Header from './Components/Ui/Header/Header'
import Footer from './Components/Ui/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import OurVans from './Pages/OurVans/OurVans';
import SingleVanDetails from './Pages/SingleVanDetails/SingleVanDetails';

import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>} />
        <Route path='/vans' element={<OurVans/>} />
        <Route path='/vans/:id' element={<SingleVanDetails/>}/>
      </Routes>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
