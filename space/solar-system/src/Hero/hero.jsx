import React, { useState, useEffect } from 'react';
import './hero.css';
import crackle from '../assets/crackle.png';
import righttop from '../assets/righttop.png';
import jupiterimg from '../assets/Jupiter.png';
import onto from '../assets/onto.png';
import rightbot from '../assets/rightbot.png';
import leftbot from '../assets/leftbot.png';
import left from '../assets/left.png';
import bottom from '../assets/bottom.png';
import topleft from '../assets/topleft.png';
import drop from '../assets/closef.png';

const Hero = ({ setClose, close }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setClose(!close);
    console.log(close);
  };

  return (
    <div className='hero-slide'>
      <div className="background">
        <div className="menu" onClick={handleToggle}>
          <div className="white"></div>
          <div className="white"></div>
          <div className="white"></div>
        </div>
        <img className={`crackle fade-in-image ${isVisible ? 'visible' : ''}`} src={crackle} alt="crackle" />
        <img className={`onto fade-in-image ${isVisible ? 'visible' : ''}`} src={onto} alt="onto" />
        <div className="headings">
          <div className="text">
            <img className={`righttop fade-in-image ${isVisible ? 'visible' : ''}`} src={righttop} alt="right top" />
            <h1 className='main_heading'>Let's Get To Know Our Solar System Galaxy</h1>
            <p>
              Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.
              <br />
              <button className='buts'>Learn More</button>
            </p>
          </div>
        </div>
        <img className={`rightbot fade-in-image ${isVisible ? 'visible' : ''}`} src={rightbot} alt="right bottom" />
        <img className={`leftbot fade-in-image ${isVisible ? 'visible' : ''}`} src={leftbot} alt="left bottom" />
        <img className={`left fade-in-image ${isVisible ? 'visible' : ''}`} src={left} alt="left" />
        <img className={`bottom fade-in-image ${isVisible ? 'visible' : ''}`} src={bottom} alt="bottom" />
        <img className={`topleft fade-in-image ${isVisible ? 'visible' : ''}`} src={topleft} alt="top left" />
      </div>
    </div>
  );
};

export default Hero;
