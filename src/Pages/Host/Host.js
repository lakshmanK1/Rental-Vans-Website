import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Host.css';

function Host() {

  const isActiveStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
    <div className='host-div'>
      <NavLink className='host-link' style={({isActive})=>isActive ? isActiveStyle : null} end to='/host'>dashboard</NavLink>
      <NavLink className='host-link' style={({isActive})=>isActive ? isActiveStyle : null} to='income'>income</NavLink>
      <NavLink className='host-link' style={({isActive})=>isActive ? isActiveStyle : null} to='allvans'>vans</NavLink>
      <NavLink className='host-link' style={({isActive})=>isActive ? isActiveStyle : null} to='reviews'>reviews</NavLink>
    </div>
    <Outlet />
    </>
  )
}

export default Host