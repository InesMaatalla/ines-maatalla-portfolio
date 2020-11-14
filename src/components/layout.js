import React from 'react'
import "./layout.css"
import Navbar from "./NavBar"
// import Home from './components/pages/HomePage/Home';
// import Projects from './components/pages/Projects/Projects';
// import Stacks from './components/pages/Stacks/Stacks';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
     
    </div>
  )   
}

export default Layout