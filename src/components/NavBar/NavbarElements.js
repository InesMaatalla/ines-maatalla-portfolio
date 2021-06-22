import { Link } from "gatsby"
import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "linear-gradient(to bottom,  rgba(255,255,255, 0.9) 0%,rgba(255,255,255,0) 100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`

export const NavLogo = styled(Link)`
  color: #1b9fa2;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

`
export const FaAngleDoubleDown = styled(Link)`
  color: #1b9fa2;
  
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #1b9fa2;
    
  }
`

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    left: 0;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    transition: all 0.2s ease;
    backdrop-filter: brightness(60%);
    opacity: 1;
    z-index: 1;

  }
`

export const NavItem = styled.li`
  height: 80px;
  

&:hover {
  border-bottom: 2px solid #1b9fa2;}
  

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border-bottom: 2px solid transparent;}

  }
`

export const NavLinks = styled(Link)`
  color: #1b9fa2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  


  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &:hover {
      color: black;
      transform: scale(1.2);
      transition: all 0.3s ease;
      
    }
  }
`