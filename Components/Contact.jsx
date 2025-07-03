
import './Contact.css'
import phone from '../src/assets/phone (1).png'
import location from '../src/assets/location.png'
import logo from '../src/assets/N&E logo.svg'



const Contact = () => {
  return (
    <div className='contact-cont'>
        
        <div className='cont'>
            <h1>We look forward to have you dine with us!!</h1>
            <div className="information">
               <div className="location1">
                    <div>
                      <img src={location} alt="" />
                    </div>
                
                    <div className='location-text'>
                        <p>2334 Windsor Lane, GingerBread Valley</p>
                        <p>MuffinMan City, NZ</p>

                    </div>
                </div>



                <div className="phone1">

                    <div className='phone-img'>
                        <img src={phone} alt="" />
                    </div>

                    <div className='phone-text'>
                        <p>Call us on</p>
                        <p>+123 456 7890</p>
                    </div>

                </div>

                
            </div>
            
            <div className='bg-img'></div>
            <button id="cont-btn">Book Your Table</button>
            <hr />
            <img id='logo' src={logo} alt="" />
        </div>
       
    </div>
    
  )
}

export default Contact
