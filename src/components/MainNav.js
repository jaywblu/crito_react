import React from 'react'

const MainNav = () => {
  return (
    <nav id="mainNav">
        <ul>
            <li><a className="active" href="index.html"><span>Home</span></a></li>
            <li><a href="service.html"><span>Service</span></a></li>
            <li><a href="news.html"><span>News</span></a></li>
            <li><a href="contact.html"><span>Contact</span></a></li>
        </ul>
    </nav>
  )
}

export default MainNav