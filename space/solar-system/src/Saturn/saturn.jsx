import React from 'react'
import './saturn.css'
import saturnimg from '../assets/Saturn.png'
import temp from '../assets/temperature.png';
import dia from '../assets/diameter.png';
import { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const saturn = () => {
  
   
  return (
    <div className='saturn-slide'>
        <div className="background">
            <img className='saturnimg' src={saturnimg} alt="" />
        
        <div className="det2">
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
            <div className="info5">
               <h1>6.Saturn</h1>
                <p>Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.</p>
            </div>
            </div>
    </div>
  )
}

export default saturn
