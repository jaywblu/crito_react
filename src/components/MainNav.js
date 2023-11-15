import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
    <nav id="mainNav">
        <ul>
            <li><NavLink to="/" end><span>Home</span></NavLink></li>
            <li><NavLink to="/services" end><span>Services</span></NavLink></li>
            <li><NavLink to="/news"><span>News</span></NavLink></li>
            <li><NavLink to="/contact" end><span>Contact</span></NavLink></li>
        </ul>
    </nav>
  )
}

export default MainNav