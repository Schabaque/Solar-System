import React from 'react'
import './neptune.css'
import ntemp from '../assets/ntemp.png';
import dia from '../assets/diameter.png';
import neptuneimg from '../assets/neptune.png'
import { Component } from 'react';

const neptune = () => {
 
  return (
    <div className='neptune-slide'>
      <div className="background"> 
        <div className="qwe">
        <div className="det3">
        <div className="info7">
            <h1>8. Neptune</h1>
            <p>Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.</p>
        </div>
        <div className="boxes">
        <div className='box'>
              <img src={dia} alt="" />
              <div className="points">
                <h3>Diameter</h3>
                <h2>870,000 <br />Miles</h2>
              </div>
            </div>
            <div className='box'>
              <img src={ntemp} alt="" />
              <div className="points">
                <h3>Temperature</h3>
                <h2>  -170 &deg; Celsius</h2>
              </div>
            </div>
        </div>
        </div>
        </div>
        <img className='neptuneimg' src={neptuneimg} alt="" />
      </div>
    </div>
  )
}

export default neptune
