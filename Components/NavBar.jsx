import React from 'react'
import './NavBar.css'
import logo from '../src/assets/N&E logo.svg'
import location from '../src/assets/location.png'
import phone from '../src/assets/phone (1).png'


const NavBar = () => {
  return (
    <div className='navbar'>
       <div className='logoNinfo'>

            <img src={logo} alt="" />

            <div className="phone">

                <div className='phone-img'>
                    <img src={phone} alt="" />
                </div>
                
                <div className='phone-text'>
                    <p>Call us on</p>
                    <p>+123 456 7890</p>
                </div>

            </div>

            <div className="location">
                <div>
                <img src={location} alt="" />
                </div>
              
                <div className='location-text'>
                    <p>2334 Windsor Lane, GingerBread Valley</p>
                    <p>MuffinMan City, NZ</p>

                </div>
            </div>
       </div>

        <div className="nav-btns">
            <button id="nav-btn1">View Menu</button>
            <button id="nav-btn2">Book Your Table</button>
            </div> 
    </div>
  )
}

export default NavBar