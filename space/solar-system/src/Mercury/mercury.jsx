import React from 'react';
import ntemp from '../assets/ntemp.png';
import image from '../assets/mercury.png';
import temp from '../assets/temperature.png';
import dia from '../assets/diameter.png';
import './mercury.css'
import { Component } from 'react';

const Sun = () => {

  return (
    <div className="mercury-slide">
      <div className='background'>
        <div className="details">
          <div>
          <img className='mercuryimg' src={image} alt="" />
          </div>

          <div className="info2">
         <h1 >1. Mercury</h1>
          <p>
          Mercury is the smallest planet in our solar system and the closest to the Sun. With a surface temperature that ranges from extremely hot to frigidly cold, it experiences some of the most dramatic temperature fluctuations of any planet. </p>
         <table>
          <tbody>
          <tr>
            <td>
            <div className='box'>
              <img src={dia} alt="" />
              <div className="points">
                <h3>Diameter</h3>
                <h2>870,000 <br />Miles</h2>
              </div>
            </div>
            </td>
            <td>
            <div className='box'>
              <img src={temp} alt="" />
              <div className="points">
                <h3>Day-Temp</h3>
                <h2>430&deg; <br />Celsius</h2>
              </div>
            </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className='box'>
              <img src={ntemp} alt="" />
              <div className="points">
                <h3>Night-Temp</h3>
                <h2>180 &deg; <br />Celsius</h2>
              </div>
            </div>
            </td>
          </tr>
          </tbody>
         </table>
=
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Sun;
