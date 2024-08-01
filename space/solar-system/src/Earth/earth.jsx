import React from 'react'
import earthimg from '../assets/earth.png';
import dia from '../assets/diameter.png';
import './earth.css';
import arrow from '../assets/arrow.png'
import rocket from '../assets/rocket.png'
import fire from '../assets/fire.png'

const earth = () => {

  return (
    <div className='earth-slide'>
      <div className="background">
        <div className="info4">
            <div className="detail2">
            <h1>
                3. Earth
            </h1>
            <p>
            The Earth is the third planet from the sun and the only known celestial body to support life. It is characterized by its diverse ecosystems, ranging from vast oceans to expansive forests, deserts, and polar ice caps.<br/> 
            </p>
            </div>
            <div className='box'>
              <img src={dia} alt="" />
              <div className="points">
                <h3>Diameter</h3>
                <h2>870,000 <br />Miles</h2>
              </div>
            </div>
            
        </div>
        <div className="detail4">
            <h1>Moon Planet</h1>
            <p>The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. It orbits our planet at an average distance of about 384,400 kilometers, influencing ocean tides and stabilizing Earth's axial tilt. </p>
        </div>
        <div className="fire-rocket">
        <img className='rocket'src={rocket} alt="" />
        <img className='fire' src={fire} alt="" />
        </div>
        <img className='arrowimg' src={arrow} alt="" />
        <img className='earthimg' src={earthimg} alt="" />

      </div>
    </div>
  )
}

export default earth
