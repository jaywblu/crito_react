import React from 'react'

import img_FooterLogo from "../assets/images/logotype-white.svg"

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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>
                <div className="grid-box">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">Delivery Details</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="grid-box">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Free eBooks</a></li>
                        <li><a href="#">Development Tutorial</a></li>
                        <li><a href="#">How to - Blog</a></li>
                        <li><a href="#">Youtube Playlist</a></li>
                    </ul>
                </div>
                <div className="grid-box">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#">Free eBooks</a></li>
                        <li><a href="#">Development Tutorial</a></li>
                        <li><a href="#">How to - Blog</a></li>
                        <li><a href="#">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="footerSticky" className="container">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div id="footerSocial">
                <ul>
                    <li><a href="#" target="_blank"><i className="fa-brands fa-facebook"></i><span>Share on Facebook</span></a></li>
                    <li><a href="#" target="_blank"><i className="fa-brands fa-twitter"></i><span>Share on Twitter</span></a></li>
                    <li><a href="#" target="_blank"><i className="fa-brands fa-instagram"></i><span>Share on Instagram</span></a></li>
                    <li><a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i><span>Share on LinkedIn</span></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer