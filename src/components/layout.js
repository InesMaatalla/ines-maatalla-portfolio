import React from "react"
import "./layout.css"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
  

  return (
    <>
      <NavBar />
        <main>{children}</main>
       
    </>
  )
}

export default Layout