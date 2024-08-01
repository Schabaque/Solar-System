import React from 'react'
import './uranus.css'
import uranusimg from '../assets/Uranus.png';
import temp from '../assets/temperature.png';
import dia from '../assets/diameter.png';
import { Component } from 'react';

const uranus = () => {
 
  return (
    <div className='uranus-slide'>
      <div className="background">
        <div className="info6">
            <div className="div1">
           <h1>7.Uranus</h1>
            <p>Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.</p>
            </div>
            <div className='boxes3'> 
            <div className='box'>
              <img src={dia} alt="" />
              <div className="points">
                <h3>Diameter</h3>
                <h2>7521 <br />Miles</h2>
              </div>
            </div>
            <div className='box'>
              <img src={temp} alt="" />
              <div className="points">
                <h3>Temperture</h3>
                <h2>475 &deg; <br />Celsius</h2>
              </div>
            </div>
            </div>
        </div>
        <img className='uranusimgs' src={uranusimg} alt="" />
      </div>
    </div>
  )
}

export default uranus
