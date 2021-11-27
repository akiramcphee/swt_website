import React, { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo_white.svg'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img 
              className='swt-logo' 
              src={logo}
              alt='Smart Wearable Tech logo'
            />
            
          </Link>
          <Link to='/' className='text-link-to-home' onClick={closeMobileMenu}>
              <p className = "swt-text">Smart Wearable Tech</p>
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/sensors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Sensors
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profiles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                The Team
              </Link>
            </li>

            <li>
              <a
                href='https://www.challeng.unsw.edu.au/challeng-projects/smart-wearable-tech'
                target='_blank'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                JOIN
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' page='https://www.challeng.unsw.edu.au/challeng-projects/smart-wearable-tech'>JOIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;