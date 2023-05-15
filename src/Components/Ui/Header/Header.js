import React from 'react'
import { Link } from 'react-router-dom'
import {CgMenu} from 'react-icons/cg'


import './Header.css'

function Header() {
  return (
    <header>
      <div className='logo-div'>
        <Link className='logo-title'>VanLife</Link>
      </div>

        <nav>
          <ul>
            <li><Link className='link-tab' to='/'>Home</Link></li>
            <li><Link className='link-tab' to='/vans'>Vans</Link></li>
            <li><Link className='link-tab' to='/aboutus'>About</Link></li>
          </ul>
        </nav>

    </header>
  )
}

export default Header