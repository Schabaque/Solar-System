import React from 'react';
import './sun.css';
import image from '../assets/sun.png';
import temp from '../assets/temperature.png';
import dia from '../assets/diameter.png';

const Sun = () => {
  return (
    <div className="sun-slide">
      <div className='background'>
        <div className="div">
          <img className='sunimg' src={image} alt="Sun" />
        </div>
        <div className="info">
          <h1>0. Sun</h1>
          <p>The sun is a massive, glowing sphere of hot gases at the center of our solar system, providing light and heat essential for life on Earth. Composed primarily of hydrogen and helium, the sun generates energy through nuclear fusion, converting hydrogen into helium and releasing immense amounts of energy in the process.</p>
          <div className="boxes">
            <div className='box'>
              <img src={dia} alt="Diameter" />
              <div className="points">
                <h3>Diameter</h3>
                <h2>870,000 <br />Miles</h2>
              </div>
            </div>
            <div className='box'>
              <img src={temp} alt="Temperature" />
              <div className="points">
                <h3>Temperature</h3>
                <h2>5500 Celsius</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sun;
