import React from 'react'

function Navbar() {
  return (
  <nav className="navbar">
    <title className="app-title">Curator // Kurator</title>
      <ul className="nav-menu">
        <li className="nav-item">
            <a href='#' className="nav-link">ABOUT</a>
        </li>
        <li className="nav-item">
            <a href='#' className="nav-link">SHUFFLE</a>
        </li>
        <li className="nav-item">
            <a href='#' className="nav-link">USER</a>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
  </nav>
  )
}

export default Navbar