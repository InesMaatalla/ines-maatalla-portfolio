import React, { useEffect, useState } from "react"
import { FaBars, FaTimes, FaAngleDoubleDown } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavbarElements'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              EXPLORE
              <FaAngleDoubleDown style={{ fill: "#1b9fa2" }} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes style={{ fill: "#1b9fa2" }}/> : <FaBars style={{ fill: "#1b9fa2" }} />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">#Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/About">#About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Destinations">#Destinations</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar;