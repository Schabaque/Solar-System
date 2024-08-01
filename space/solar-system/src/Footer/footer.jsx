import React from 'react';
import './footer.css';
import neptune2 from '../assets/neptue2.png';
import Navbar from '../Navbar/navbar.jsx';

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Subscribing....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ea5382e-735a-4911-a294-87e926a97989");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Congratulations you have subscribed to amazing content!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='footer-slide'>
      <div className="backgroundl">
        <img className='neptuneimgs' src={neptune2} alt="Neptune" />
        <div className="footer">
          <h1>Join The Community Now</h1>
          <p>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
          <form onSubmit={onSubmit} className="input">
            <input className='email' type="email" name="email" placeholder='Enter Your Email Id' required />
            <button type="submit" className='but'>Subscribe</button>
          </form>
          <span className='result'>{result}</span>
          <div className="navigate"><Navbar/></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
