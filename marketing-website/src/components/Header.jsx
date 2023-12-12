import React from 'react'
import './Header.css'
import {SiYourtraveldottv} from 'react-icons/si'

const Header = () => {
  return (
    <header>
        <h1 className='logo'><SiYourtraveldottv className='user'></SiYourtraveldottv>Safar</h1>
        <nav>
          <ul className='navLink'>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li className="contact">
              Contact Us
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header