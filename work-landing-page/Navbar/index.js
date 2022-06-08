import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/AboutComponents' activeStyle>
            About
          </NavLink>
          <NavLink to='/ServiceComponents' activeStyle>
            Services
          </NavLink>
          <NavLink to='/ContactComponents' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/DownloadComponents' activeStyle>
            Download
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Download App</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
