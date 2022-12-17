import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>The Mojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px"
        }}>Create a new blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar
