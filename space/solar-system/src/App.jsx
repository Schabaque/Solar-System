import React, { useState, useEffect } from 'react';
import Sun from './Sun/sun.jsx';
import Mercury from './Mercury/mercury.jsx';
import './App.css';
import Venus from './Venus/venus.jsx';
import Earth from './Earth/earth.jsx';
import Mars from './Mars/mars.jsx';
import Jupiter from './Jupiter/jupiter.jsx';
import Saturn from './Saturn/saturn.jsx';
import Uranus from './Uranus/uranus.jsx';
import Neptune from './Neptune/neptune.jsx';
import Footer from './Footer/footer.jsx';
import Hero from './Hero/hero.jsx';
import Navbar from './Navbar/navbar.jsx';
import Cursor from './Cursor/cursor.jsx';
import Summary from './Summary/summary.jsx'
const App = () => {
  const [close, setClose] = useState(false);
 

  return (
    <div>
      
     <Navbar close={close} setClose={setClose}/>
      <Hero setClose={setClose} close={close}/>
      <div className="container">
      <Summary/>
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </div>
      <Footer />
    
    </div>
  );
};

export default App;
