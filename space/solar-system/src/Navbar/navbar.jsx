import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import closef from '../assets/closef.png';
import { Link } from 'react-scroll';

const Navbar = ({ close}) => {
  const [exp, setExp] = useState(false);

  function expansion() {
    setExp(!exp);
  }

  return (
    <div className='navbar-container'>
      <nav className={exp ? "navbarexp" : "navbar"}>
        <img className='logo' src={logo} alt="Logo" />
     
        <div className={close ? "noChance" : "chance"}>
          <ul className={exp ? 'navlistexp' : 'navlist'}>
            <li><Link to='sun-slide' smooth={true} offset={0} duration={500}>Sun</Link></li>
            <li><Link to='mercury-slide' smooth={true} offset={0} duration={500}>Mercury</Link></li>
            <li><Link to='venus-slide' smooth={true} offset={0} duration={500}>Venus</Link></li>
            <li><Link to='earth-slide' smooth={true} offset={0} duration={500}>Earth</Link></li>
            <li onClick={expansion} className={exp ? "hide" : "show"}>...</li>
            <li className={exp ? "show" : "hide"}><Link to='mars-slide' smooth={true} offset={0} duration={500}>Mars</Link></li>
            <li className={exp ? "show" : "hide"}><Link to='jupiter-slide' smooth={true} offset={0} duration={500}>Jupiter</Link></li>
            <li className={exp ? "show" : "hide"}><Link to='saturn-slide' smooth={true} offset={0} duration={500}>Saturn</Link></li>
            <li className={exp ? "show" : "hide"}><Link to='uranus-slide' smooth={true} offset={0} duration={500}>Uranus</Link></li>
            <li className={exp ? "show" : "hide"}><Link to='neptune-slide' smooth={true} offset={0} duration={500}>Neptune</Link></li>
            <li className={exp ? "show" : "hide"}><Link to='footer-slide' smooth={true} offset={0} duration={500}>Subscribe us</Link></li>
            <li>&copy; 2023 SolarSystem</li>
            <li className={exp ? "show" : "hide"} onClick={expansion}> <img src={closef} alt="Close" /> </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
