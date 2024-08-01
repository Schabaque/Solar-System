import React, { useState, useEffect } from 'react'; 
const cursor = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
const [circles, setCircles] = useState([]);

const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
  "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
  "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
  "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
  "#48005f", "#3d005e"
];

useEffect(() => {
  const circleElements = document.querySelectorAll(".circle");
  setCircles(circleElements);

  circleElements.forEach((circle, index) => {
    circle.style.backgroundColor = colors[index % colors.length];
  });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

useEffect(() => {
  const animateCircles = () => {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      circle.style.scale = (circles.length - index) / circles.length;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.offsetLeft - x) * 0.03;  // Adjusted for smoother and faster transition
      y += (nextCircle.offsetTop - y) * 0.03;   // Adjusted for smoother and faster transition
    });

    requestAnimationFrame(animateCircles);
  };

  animateCircles();
}, [circles, coords]);

  return (
    <div>
   {colors.map((color, index) => (
        <div key={index} className="circle"></div>
     ))}
    </div>
  )
}

export default cursor


