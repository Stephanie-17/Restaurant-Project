import React from 'react'
import './Menu.css'
import food from '../src/assets/foodN&E.png'

const Menu = () => {
  return (
    <div className='menu-cont'>
        <p id='taste'>
          Taste the Mood
        </p>
        <div className='menu'>
      <div className='menu-text'>
      
        <h1>Our Menu</h1>
        <p> Book now Noir Èclat Restaurant. Noir Èclat known for
          our luxurious dishes, well crafted cocktails, carefully
          curated wine list and impeccable service
        </p>
        <button className='btns' id="nav-btn1">View Menu</button>
        <button id="nav-btn2">Book Your Table</button>
      </div>

      <div className='menu-img'>
       <img src={food} alt="" />
      </div>
      </div>  
    </div>
   
  )
}

export default Menu