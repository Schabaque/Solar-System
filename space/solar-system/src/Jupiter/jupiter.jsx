import React from 'react'
import './jupiter.css';
import jupiterimg from '../assets/Jupiter.png';
import temp from '../assets/temperature.png';
import dia from '../assets/diameter.png';
import { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const jupiter = () => {
 
  return (
    <div className='jupiter-slide'>
      <div className="background">
      <div className="info3">
            <h1>
                5. Jupiter
            </h1>
            <p>
            Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.
            </p>

            
        </div>
        <div className="det">
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
        <img className='jupiterimg' src={jupiterimg} alt="" />
      </div>
    </div>
  )
}

export default jupiter
