import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Roadmap, MobileMenu } from './components';

const App = () => {
  const [active, setActive] = useState(false);
  const item = document.getElementById("active");
  console.log(item);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover z-20 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Roadmap />
        <Experience />
        <div className="z-[-1]">
          <StarsCanvas />
        </div>
        <div className="relative z-0">  
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;