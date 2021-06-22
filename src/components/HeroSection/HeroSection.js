import React, { useState}  from 'react';
import './HeroSection.css';
import { Button } from "../Button/ButtonHero"
import { Link } from 'gatsby';



function HeroSection() {
  const [setClick] = useState(false);

  
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="hero-container">
    <p>Happiness comes in waves</p>
      <h1>Sea the World</h1>
      <div className="hero-btns">
      <Link to='/Destinations' className='nav-links' onClick={closeMobileMenu}>
      <Button fontBig big primary>
        Get Started
      </Button>
    </Link>
      
 
      </div>
    </div>
  );
}

export default HeroSection;