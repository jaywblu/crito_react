import React from 'react'

import img_FooterLogo from "../assets/images/logotype-white.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div id="footerMain" className="container">
            <div className="grid-wrapper">
                <div className="grid-box">
                    <img src={img_FooterLogo} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam
                        ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
                <div className="grid-box">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Features</Link></li>
                        <li><Link to="#">Works</Link></li>
                        <li><Link to="#">Career</Link></li>
                    </ul>
                </div>
                <div className="grid-box">
                    <h3>Help</h3>
                    <ul>
                        <li><Link to="#">Customer Support</Link></li>
                        <li><Link to="#">Delivery Details</Link></li>
                        <li><Link to="#">Terms & Conditions</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="grid-box">
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to="#">Free eBooks</Link></li>
                        <li><Link to="#">Development Tutorial</Link></li>
                        <li><Link to="#">How to - Blog</Link></li>
                        <li><Link to="#">Youtube Playlist</Link></li>
                    </ul>
                </div>
                <div className="grid-box">
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="#">Free eBooks</Link></li>
                        <li><Link to="#">Development Tutorial</Link></li>
                        <li><Link to="#">How to - Blog</Link></li>
                        <li><Link to="#">Youtube Playlist</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="footerSticky" className="container">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div id="footerSocial">
                <ul>
                    <li><Link to="#" target="_blank"><i className="fa-brands fa-facebook"></i><span>Share on Facebook</span></Link></li>
                    <li><Link to="#" target="_blank"><i className="fa-brands fa-twitter"></i><span>Share on Twitter</span></Link></li>
                    <li><Link to="#" target="_blank"><i className="fa-brands fa-instagram"></i><span>Share on Instagram</span></Link></li>
                    <li><Link to="#" target="_blank"><i className="fa-brands fa-linkedin"></i><span>Share on LinkedIn</span></Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer