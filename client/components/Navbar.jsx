import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import User from "./User.jsx"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="app-title">C u r a t o r // K u r a t o r</Link>
          <ul className="nav-menu">
            <li className="nav-item">
                <a href='#' className="nav-link">SEARCH</a>
            </li>
            <li className="nav-item">
                <Link to='/shuffle' className="nav-link">SHUFFLE</Link>
            </li>
            <li className="nav-item user">
                <Link to="/user" className="nav-link">USER</Link>
            </li>
          </ul>
      </nav>

    </>
  )
}

export default Navbar