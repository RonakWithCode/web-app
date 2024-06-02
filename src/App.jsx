import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavbarDefault } from './Components/NavbarDefault';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment the following lines as needed */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <div
          // className="pointer-events-none absolute top-0 left-0 w-32 h-32 rounded-full bg-white opacity-20"
          // style={{
          //   transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`,
          // }}
        ></div>
      </div>
    </Router>
  );
}

export default App;
