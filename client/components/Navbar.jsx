import React from 'react'

function Navbar() {
  return (
  <nav className="navbar">
    <title className="app-title">Curator // Kurator</title>
      <ul class="nav-menu">
        <li class="nav-item">
            <a href='#' class="nav-link">ABOUT</a>
        </li>
        <li class="nav-item">
            <a href='#' class="nav-link">SHUFFLE</a>
        </li>
        <li class="nav-item">
            <a href='#' class="nav-link">USER</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
  </nav>
  )
}

export default Navbar