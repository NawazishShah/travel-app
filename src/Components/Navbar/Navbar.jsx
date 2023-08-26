import React, { useState } from 'react'
import './Navbar.css'

import {BiLogoMediumOld} from 'react-icons/bi'
import {PiDotsNineBold} from 'react-icons/pi'
import {AiFillCloseCircle} from 'react-icons/ai'

const Navbar = () => {
    const [navBar , setNavBar] = useState('')

    const showNavBar = () => {
        setNavBar('showNavbar')
        
    }

    const rmoveNavBar = () => {
        setNavBar('')
    }

  return (
    <div className='navBar'>
        <div className="logoDiv">
            <BiLogoMediumOld className='icon'/>
            <span>OU-Trips</span>
        </div>
        <div className={`menu ${navBar}`}>
            <ul>
                <li className='navList'>
                Destinations
                </li>
                <li className='navList'>
                    About Us
                </li>
                <li className='navList'>
                    Testimonial
                </li>
                <li className='navList'>
                    Gallery
                </li>
                <AiFillCloseCircle className='icon closeIcon' onClick={rmoveNavBar} />
            </ul>
        </div>
        <button className='btn signUpBtn'>
            Sign Up
        </button>
        <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
}

export default Navbar
