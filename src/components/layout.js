// import React from 'react'
// import "./layout.css"
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

// export default Layout




Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout