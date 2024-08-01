import React from 'react'
import './venus.css'
import venusimg from '../assets/venus.png'
import temp from '../assets/temperature.png';
import dia from '../assets/diameter.png';
import { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const venus = () => {

  return (
    <div className='venus-slide'>
        <div className="background">
       <img className='venusimg' src={venusimg} alt="" />
     <div className="info3">
        <h1>2. Venus</h1>
        <p>
        Venus is the second planet from the Sun and is often referred to as Earth's "sister planet" due to its similar size and composition. However, its thick, toxic atmosphere composed primarily of carbon dioxide traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Venus has a surface covered with volcanic plains and mountains, and its atmospheric pressure is over 90 times that of Earth’s
        </p>


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
    </div>
  )
}

export default venus
