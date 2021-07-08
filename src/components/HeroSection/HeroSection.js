import React, { useState}  from 'react';
import './HeroSection.css';
import { Button } from "../Button/ButtonHero"
import { Link } from 'gatsby';

function HeroSection() {
  const [setClick] = useState(false);

  return (
    <div className="hero-container">
      <h1>Sea the World</h1>
      <div className="hero-btns">
      <Link to='/Destinations' className='nav-links'>
      <Button fontBig big primary>
        Get Started
      </Button>
    </Link>
      
 
      </div>
    </div>
  );
}

export default HeroSection;