import React from 'react'

function Navbar() {
  return (
  <nav className="navbar">
    <title className="app-title">C u r a t o r // K u r a t o r</title>
      <ul className="nav-menu">
        <li className="nav-item">
            <a href='#' className="nav-link">SEARCH</a>
        </li>
        <li className="nav-item">
            <a href='#' className="nav-link">SHUFFLE</a>
        </li>
        <li className="nav-item user">
            <a href='#' className="nav-link">USER</a>
        </li>
      </ul>
  </nav>
  )
}

export default Navbar