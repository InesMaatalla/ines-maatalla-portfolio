import React, { useState} from 'react';
import { Link } from 'gatsby';
import './NavBar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleKeyDown = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='https://www.inesmaatalla.com' className='navbar-logo' onClick={closeMobileMenu}>
          EXPLOR <i class='fas fa-angle-double-down' />
        </Link>
        <div role="button" tabIndex={0} className='menu-icon'  onClick={handleClick} onKeyDown={handleKeyDown}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              #Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              #Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              #Stacks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar