import React, { useState, useEffect } from 'react';
import './summary.css';
import image from '../assets/sun.png';
const Summary = () => {
  return (
    <div className="summary-slide">
      <div className="background">
      <h1 className='htag'>What Awaits You ?</h1>
      
        <div className="summary">
          <div className='sum' id='sun'><h2>Sun</h2><p>The sun is a massive, glowing sphere of hot gases</p></div>
          <div className='sum' id="mercury" ><h2>Mercury</h2><p>Mercury is the smallest planet in our solar system.</p></div>
          <div className='sum' id="venus"> <h2> Venus</h2><p>Venus is often referred to as Earth's "sister planet"</p></div>
          <div className='sum' id="earth" ><h2>Earth</h2><p>The Earth is the third planet from the sun.</p></div>
          <div className='sum' id="Mars"><h2>Mars</h2><p> Mars, often called the "Red Planet" due to its reddish appearance</p></div>
          <div className='sum'id='Jupiter' ><h2>Jupiter</h2><p>Jupiter, the largest planet in our solar system</p></div>
          <div className='sum' id='Saturn'><h2>Saturn</h2><p>The sun is a massive, glowing sphere of hot gases</p></div>
          <div className='sum' id='Uranus'><h2>Uranus</h2><p>Uranus, often referred to as the "Ice Giant"</p></div>
          <div className='sum' id='Neptune'><h2>Neptune</h2><p>Neptune, often called the "Blue Giant"</p></div>
        </div>
        <div className="description"> <p>   " SolarSystemExplorer.org is a leading educational platform dedicated to exploring the wonders of our solar system. Designed for students, educators, and space enthusiasts, the site provides a wealth of information and interactive features that cover the entire solar system in detail. "
        </p>
        </div>
        <button className='buts' id='exbut'>Explore More</button>



      </div>
    </div>
  );
};

export default Summary;
