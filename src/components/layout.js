import PropTypes from "prop-types"
import React from "react"
import Footer from "./Footer"
import "./layout.css"
import NavBar from "./NavBar"


const Layout = ({ children }) => {
  return (
    <div>
    <NavBar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )   
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout