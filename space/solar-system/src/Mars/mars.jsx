import React from 'react'
import'./mars.css'
import marsimg from '../assets/mars.png'
import dia from '../assets/diameter.png';
import ntemp from '../assets/ntemp.png';

import arrow2 from '../assets/arrow2.png'

const mars = () => {

  return (
    <div className='mars-slide'>
        <div className="background">
        <div className="info3">
            <h1>
                4. Mars
            </h1>
            <p>
            Mars, often called the "Red Planet" due to its reddish appearance, is the fourth planet from the Sun in our solar system. It has the tallest volcano, Olympus Mons, and the deepest canyon, Valles Marineris, showcasing a diverse and dramatic landscape.
            </p>
        </div>
      <img src={marsimg} alt="" className="marsimg" />
      <img src={arrow2} alt="" className='arrow2' />
      <div className="info10">
        <h1>Martian Moons</h1>
        <p>
        Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.
        </p>
      </div>
      <div className="boxes2">
      <div className='box'>
              <img src={dia} alt="" />
              <div className="points">
                <h3>Diameter</h3>
                <h2>4212<br />Miles</h2>
              </div>
            </div>
            <div className='box'>
              <img src={temp} alt="" />
              <div className="points">
                <h3>Day-Temp</h3>
                <h2>430&deg; <br />Celsius</h2>
              </div>
            </div>
            <div className='box'>
              <img src={ntemp} alt="" />
              <div className="points">
                <h3>Night-Temp</h3>
                <h2>430&deg; <br />Celsius</h2>
              </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default mars
