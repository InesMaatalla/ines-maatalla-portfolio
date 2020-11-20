import React, { useState} from 'react';
import { Link } from 'gatsby';
import './NavBar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleKeyDown = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
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
                to='/Projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                #Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Stacks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                #Stacks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider> 
  );
}

export default Navbar