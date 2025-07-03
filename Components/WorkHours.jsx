import React from 'react'
import './workhours.css'

const WorkHours = () => {
  return (
    <div className='WH'>
        <div className='working-hours'>
            <h3>Working Hours</h3>
            <p>We Are Open Everyday Of The Week</p>
            <p >From 5pm to 12am</p>

            <p className='disclaimer'>Reservations are limited to <span className='hours'>2hrs</span>  </p>
            <p>We do not accept <span className='hours'>parties more than 6 </span> </p>
        </div>


        <div className="working-hours-large">
            <h3>Working Hours</h3>
            <div className='time'>
              <div className="days">
                <span className="sunday">Sunday</span>
                <p>5pm - 12am</p>
              </div>
              <div className="days">
                <span className="monday">Monday</span>
                <p>5pm - 12am</p>
              </div>
              <div className="days">
                <span className="tuesday">Tuesday</span>
                <p>5pm - 12am</p>
              </div>
              <div className="days">
                <span className="wednesday">Wednesday</span>
                <p>5pm - 12am</p>
              </div>
              <div className="days">
                <span className="thursday">Thursday</span>
                <p>5pm - 12am</p>
              </div>
              <div className="days">
                <span className="friday">Friday</span>
                <p>5pm - 12am</p>
              </div>
              <div className="days">
                <span className="saturday">Saturday</span>
                <p>5pm - 12am</p>
              </div>
            
            </div>
            <div className="disclaimers">
              <p>Reservations are limited to <span className='hours'>2hrs</span>  </p>
              <p>We do not accept <span className='hours'>parties more than 6 </span> </p>
              </div>
        </div>
    </div>
  )
}

export default WorkHours